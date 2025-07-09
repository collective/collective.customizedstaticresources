/**
 * Module Federation support.
 *
 * See https://github.com/plone/mockup/src/index.js for more information.
 *
 */
import "@patternslib/dev/webpack/module_federation";

// And now load this bundle's actual entry point.
import("./patterns");

// Register Bootstrap and jQuery gloablly
async function register_global_libraries() {
    // Register Bootstrap globally
    const bootstrap = await import("bootstrap");
    window.bootstrap = bootstrap;

    // Register jQuery globally
    const jquery = (await import("jquery")).default;
    window.jQuery = jquery;
    window.$ = jquery;
}
register_global_libraries();
