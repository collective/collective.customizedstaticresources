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
import "@plone/mockup/autotoc/autotoc";
import "@plone/mockup/backdrop/backdrop";
import "@plone/mockup/contentloader/contentloader";
import "@plone/mockup/contentbrowser/contentbrowser";
import "@plone/mockup/cookietrigger/cookietrigger";
import "@plone/mockup/datatables/datatables";
import "@plone/mockup/formautofocus/formautofocus";
import "@plone/mockup/formunloadalert/formunloadalert";
import "@plone/mockup/livesearch/livesearch";
import "@plone/mockup/markspeciallinks/markspeciallinks";
import "@plone/mockup/modal/modal";
import "@plone/mockup/navigationmarker/navigationmarker";
import "@plone/mockup/passwordstrength/passwordstrength";
import "@plone/mockup/preventdoublesubmit/preventdoublesubmit";
import "@plone/mockup/manageportlets/manageportlets.js";
import "@plone/mockup/querystring/querystring";
import "@plone/mockup/recurrence/recurrence";
import "@plone/mockup/relateditems/relateditems";
import "@plone/mockup/search/search";
import "@plone/mockup/select2/select2";
import "@plone/mockup/sortable/sortable";
import "@plone/mockup/structure/structure";
import "@plone/mockup/structure-updater/structure-updater";
import "@plone/mockup/textareamimetypeselector/textareamimetypeselector";
// COMMENT/REMOVE CUSTOMIZED PATTERNS
// import "@plone/mockup/tinymce/tinymce";
import "@plone/mockup/toggle/toggle";
import "@plone/mockup/toolbar/toolbar";
import "@plone/mockup/tree/tree";
import "@plone/mockup/upload/upload";

// CUSTOMIZED LOCAL PATTERNS
import ".js/pat/tinymce/tinymce";

// REMOVE obsolete patterns
//import "@plone/mockup/texteditor/texteditor";

// Controlpanels
import "@plone/mockup/controlpanels/dexterity-types-listing";
import "@plone/mockup/controlpanels/registry";
import "@plone/mockup/controlpanels/schemaeditor";
import "@plone/mockup/controlpanels/contentrules";
import "@plone/mockup/controlpanels/contentrule-elements";
import "@plone/mockup/controlpanels/discussion";
import "@plone/mockup/controlpanels/discussion-comments";
import "@plone/mockup/controlpanels/discussion-moderation";

// Change default value for pat-tooltip trigger
tooltip_parser.parameters.trigger.value = "hover";

// Change validation error template to be BS compatible
ValidationPattern.prototype.error_template = (message) =>
    `<em class="invalid-feedback">${message}</em>`;

// Import pattern styles in JavaScript
window.__patternslib_import_styles = true;

registry.init();
