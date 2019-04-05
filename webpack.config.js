const Encore = require('@symfony/webpack-encore');

Encore
    // directory where all compiled assets will be stored
    .setOutputPath("public/build/")
    .setPublicPath("/build")
    .setManifestKeyPrefix("build")
    .cleanupOutputBeforeBuild()
    .addEntry("ui.bootstrap.dialogs", "./src/ui.bootstrap.dialogs.js")
    .addEntry("angular", "./angular.js")

    .enableSourceMaps(!Encore.isProduction());

const devConfig = Encore.getWebpackConfig();
devConfig.name = "devConfig";

module.exports = devConfig;
