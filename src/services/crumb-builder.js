export class CrumbBuilderFactory {
    // (1.) Create by passing in articles, currentSlug
    constructor () {
      // (2.) Don't include the current article in articles list
      this.crumbs = Array.from([])
    }
  
    // (4.) Builder pattern usage
    addCrumb (crumbPath, crumbLabel) {
      this.crumbs.push(
          {
              'pathname': crumbPath,
              'crumbLabel': crumbLabel,
              'crumbSeparator': "/"
          }
      );
      return this;
    }
}