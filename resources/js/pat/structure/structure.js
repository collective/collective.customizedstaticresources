// demonstrate how to override only parts of structure pattern.
// basically a 1:1 import of structure pattern but import our custom
// app.js in the init() method.

import StructureBase from "@plone/mockup/src/pat/structure/structure";

StructureBase.prototype.init = async function() {
    console.log(`Custom structure pattern`)
    import("@plone/mockup/src/pat/structure/structure.scss");
    (await import("bootstrap")).Dropdown;

    // backbone paginator, loaded by app-view expects Backbone and
    // Underscore to be in global namespace.
    const _ = (await import("underscore")).default;
    const Backbone = (await import("backbone")).default;
    window._ = _;
    window.Backbone = Backbone;

    // import our custom app.js
    const AppView = (await import("./app")).default;

    this.browsing = true; // so all queries will be correct with QueryHelper
    this.options.collectionUrl = this.options.vocabularyUrl;
    this.options.pattern = this;
    this.options.language =
        document.querySelector("html").getAttribute("lang") || "en";

    // the ``attributes`` options key is not compatible with backbone,
    // but queryHelper that will be constructed by the default
    // ResultCollection will expect this to be passed into it.
    this.options.queryHelperAttributes = this.options.attributes;
    delete this.options.attributes;

    const view = new AppView(this.options);
    await view.render();
    this.$el.append(view.$el);
}

export default StructureBase;
