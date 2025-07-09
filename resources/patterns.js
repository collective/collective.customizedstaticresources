/* Patterns bundle configuration.
 *
 * This is basically the same as https://github.com/plone/mockup/blob/master/src/patterns.js
 * But our customizations have our local path instead of the default `@plone/mockup`
 */

// Core
import registry from "@patternslib/patternslib/src/core/registry";

// Patternslib patterns
import "@patternslib/patternslib/src/pat/checklist/checklist";
import "@patternslib/patternslib/src/pat/date-picker/date-picker";
import "@patternslib/patternslib/src/pat/datetime-picker/datetime-picker";
import "@patternslib/patternslib/src/pat/display-time/display-time";
import { Pattern as ValidationPattern } from "@patternslib/patternslib/src/pat/validation/validation"; // Also loads the Pattern itself.
import { parser as tooltip_parser } from "@patternslib/patternslib/src/pat/tooltip/tooltip";
import "@patternslib/pat-code-editor/src/code-editor";
import "@patternslib/patternslib/src/pat/inject/inject";
import "@patternslib/patternslib/src/pat/depends/depends";

// Import all used patterns for the bundle to be generated
import "@plone/mockup/src/pat/autotoc/autotoc";
import "@plone/mockup/src/pat/backdrop/backdrop";
import "@plone/mockup/src/pat/contentloader/contentloader";
import "@plone/mockup/src/pat/contentbrowser/contentbrowser";
import "@plone/mockup/src/pat/cookietrigger/cookietrigger";
import "@plone/mockup/src/pat/datatables/datatables";
import "@plone/mockup/src/pat/formautofocus/formautofocus";
import "@plone/mockup/src/pat/formunloadalert/formunloadalert";
import "@plone/mockup/src/pat/livesearch/livesearch";
import "@plone/mockup/src/pat/markspeciallinks/markspeciallinks";
import "@plone/mockup/src/pat/modal/modal";
import "@plone/mockup/src/pat/navigationmarker/navigationmarker";
import "@plone/mockup/src/pat/passwordstrength/passwordstrength";
import "@plone/mockup/src/pat/preventdoublesubmit/preventdoublesubmit";
import "@plone/mockup/src/pat/manageportlets/manageportlets.js";
import "@plone/mockup/src/pat/querystring/querystring";
import "@plone/mockup/src/pat/recurrence/recurrence";
import "@plone/mockup/src/pat/relateditems/relateditems";
import "@plone/mockup/src/pat/search/search";
import "@plone/mockup/src/pat/select2/select2";
import "@plone/mockup/src/pat/sortable/sortable";
import "@plone/mockup/src/pat/structure/structure";
import "@plone/mockup/src/pat/structure-updater/structure-updater";
import "@plone/mockup/src/pat/textareamimetypeselector/textareamimetypeselector";
// COMMENT/REMOVE CUSTOMIZED PATTERNS
// import "@plone/mockup/src/pat/tinymce/tinymce";
import "@plone/mockup/src/pat/toggle/toggle";
import "@plone/mockup/src/pat/toolbar/toolbar";
import "@plone/mockup/src/pat/tree/tree";
import "@plone/mockup/src/pat/upload/upload";

// CUSTOMIZED LOCAL PATTERNS
import "./js/pat/tinymce/tinymce";

// REMOVE obsolete patterns
//import "@plone/mockup/src/pat/texteditor/texteditor";

// Controlpanels
import "@plone/mockup/src/pat/controlpanels/dexterity-types-listing";
import "@plone/mockup/src/pat/controlpanels/registry";
import "@plone/mockup/src/pat/controlpanels/schemaeditor";
import "@plone/mockup/src/pat/controlpanels/contentrules";
import "@plone/mockup/src/pat/controlpanels/contentrule-elements";
import "@plone/mockup/src/pat/controlpanels/discussion";
import "@plone/mockup/src/pat/controlpanels/discussion-comments";
import "@plone/mockup/src/pat/controlpanels/discussion-moderation";

// Change default value for pat-tooltip trigger
tooltip_parser.parameters.trigger.value = "hover";

// Change validation error template to be BS compatible
ValidationPattern.prototype.error_template = (message) =>
    `<em class="invalid-feedback">${message}</em>`;

// Import pattern styles in JavaScript
window.__patternslib_import_styles = true;

// CUSTOMIZE SelectedItem.svelte component
import plone_registry from "@plone/registry";

// register custom `pat-contentbrowser` components
async function register_selecteditem_component() {
    // we register our component to a custom keyname.
    // this keyname can now be used in plone.autoform widget hints:
    //
    // form.widget(
    //      "my_contentbrowser_field",
    //      ContentBrowserFieldWidget,
    //      vocabulary="plone.app.vocabularies.Catalog",
    //      pattern_options={
    //          "recentlyUsed": True,  # Just turn on. Config in plone.app.widgets.
    //          "componentRegistryKeys": {
    //              "selectedItem": "pat-contentbrowser.customizedstaticresources.SelectedItem",  # use your customized component key here
    //          },
    //      },
    //  )

    const CustomSelectedItem = (await import("./js/pat/contentbrowser/components/CustomSelectedItem.svelte")).default;
    plone_registry.registerComponent({
        name: "pat-contentbrowser.customizedstaticresources.SelectedItem",
        component: CustomSelectedItem,
    });
}
register_selecteditem_component();

registry.init();
