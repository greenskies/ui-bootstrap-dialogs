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

Encore.setPublicPath("/pics3/current/public/build").enableSourceMaps(false).enableVersioning();

const prodConfig = Encore.getWebpackConfig();
prodConfig.name = "prodConfig";

Encore.setPublicPath("/stage/pics3/current/public/build").enableSourceMaps(false).enableVersioning();
const stageConfig = Encore.getWebpackConfig();
stageConfig.name = "stageConfig";

module.exports = [devConfig, prodConfig, stageConfig];
