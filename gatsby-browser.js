/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
    console.log("We've started!")
    if( "fonts" in document ) {
        // Optimization for Repeat Views
        if( sessionStorage.fontsLoadedCriticalFoftPreload ) {
            console.log("ls load")
            document.documentElement.className += " fonts-loaded-2";
            return;
        }

        document.fonts.load("1em LatoSubset").then(function () {
            document.documentElement.className += " fonts-loaded-1";

            Promise.all([
                document.fonts.load("400 1em Lato"),
                document.fonts.load("700 1em Lato"),
                document.fonts.load("italic 1em Lato"),
                document.fonts.load("italic 700 1em Lato")
            ]).then(function () {
                document.documentElement.className += " fonts-loaded-2";
                console.log("pr set")

                // Optimization for Repeat Views
                sessionStorage.fontsLoadedCriticalFoftPreload = true;
            });
        });
    }
}