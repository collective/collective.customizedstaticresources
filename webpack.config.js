process.traceDeprecation = true;
const path = require("path");
const mockup_config = require("@plone/mockup/webpack.config.js");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
    const config = mockup_config();

    config.entry = {
        "bundle.min": path.resolve(__dirname, "resources/index.js"),
    };

    config.output.path = path.resolve(
        __dirname,
        "src/collective/customizedstaticresources/static/bundle/"
    );

    // console.log(config);

    return config;
};
