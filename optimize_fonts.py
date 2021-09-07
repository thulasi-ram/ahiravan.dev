import os, subprocess
import tempfile
import shutil
import urllib.request
import zipfile
import pathlib
import json


VERSION = "10.1.1"
FONT_NAMES = ["iosevka-aile", "iosevka-etoile"]
WEIGHTS_MAP = {
    "regular": 400,
    "italic": 400,
    "medium": 500,
    "mediumitalic": 500,
    "bold": 700,
    "bolditalic": 700,
}


def optimize_font(filename, font_dirname, out_dirname, flavour):
    outname_name = f"{out_dirname}/{filename}.{flavour}"
    commande = [
        "pyftsubset",
        f"{filename}.ttf",
        f"--output-file={outname_name}",
        f"--flavor={flavour}",
        '--layout-features="kern,liga,clig,calt,ccmp,locl,mark,mkmk,onum,pnum,smcp,c2sc,frac,lnum,tnum,subs,sups,cswh,dlig,ss01,ss03,zero"',
        "--unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
        "--no-hinting",
        "--desubroutinize",
    ]
    subprocess.call(commande, cwd=font_dirname)
    return outname_name


class CssGen:
    def __init__(self) -> None:
        self.css = []

    def generate(self, variant, weight, woff_file_name, woff2_file_name):
        font_style = "italic" if "italic" in weight else "normal"
        font_name = variant.replace("-", " ").title()
        self.css.append(
            f"""
                @font-face {{
                    font-family: "{font_name} Optimized";
                    font-display: swap;
                    font-stretch: normal;
                    font-weight: {WEIGHTS_MAP[weight]};
                    font-style: {font_style};
                    src: url('{pathlib.Path(woff2_path).name}') format('woff2'), url('{pathlib.Path(woff_path).name}') format('woff');
                }}
            """
        )

    def write(self, dir_name):
        fname = f"{dir_name}/font.css", "w+"
        with open(f"{dir_name}/font.css", "w+") as f:
            data = "\n".join(self.css)
            f.writelines(data)
        return fname


if __name__ == "__main__":
    curr_dirname_prefix = os.path.realpath(".")
    optimized_dirname = (
        f"{curr_dirname_prefix}/static/fonts/iosevka-optimized-{VERSION}"
    )
    pathlib.Path(optimized_dirname).mkdir(parents=True, exist_ok=True)

    css = CssGen()

    with tempfile.TemporaryDirectory() as download_dir_name:
        for variant in FONT_NAMES:
            file_name = f"{download_dir_name}/{variant}.zip"
            url = f"https://github.com/be5invis/Iosevka/releases/download/v{VERSION}/ttf-{variant}-{VERSION}.zip"
            with urllib.request.urlopen(url) as response, open(
                file_name, "wb"
            ) as out_file:
                shutil.copyfileobj(response, out_file)
            with zipfile.ZipFile(file_name, "r") as zip_ref:
                zip_ref.extractall(download_dir_name)

            for weight in WEIGHTS_MAP.keys():
                fname = f"{variant}-{weight}"
                woff_path = optimize_font(
                    fname, download_dir_name, optimized_dirname, "woff"
                )
                woff2_path = optimize_font(
                    fname, download_dir_name, optimized_dirname, "woff2"
                )
                css.generate(variant, weight, woff_path, woff2_path)
    css.write(optimized_dirname)
