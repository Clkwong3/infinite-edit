const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      // Webpack plugin that generates html file and injects the bundles.
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "J.A.T.E.",
        long_title: "Just Another Text Editor",
      }),
      // Inject custom service worker.
      new InjectManifest({
        swSrc: "./src-sw.js", // Get it from client folder.
        swDest: "src-sw.js", // Put it into the root of the build folder (dist).
      }),
      // Create a manifest.json file.
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Just Another Text Editor",
        short_name: "J.A.T.E.",
        description: "Leave a note!",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "/", // http://localhost:3001/ <- The last '/' is what the start_url is.
        publicPath: "./",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"), // Name of the folders; 'icons' folder go into 'assets' folder.
          },
        ],
      }),
    ],

    module: {
      rules: [
        // TODO: Add CSS loaders and babel to webpack.
        // Handling CSS files
        {
          test: /\.css$/i, // If there is a match to any file with .css,
          use: ["style-loader", "css-loader"], // Use these loaders to process the CSS file.
        },
        // Handling JavaScript files
        {
          test: /\.m?js$/, // If there is a match to any file with .js or .mjs,
          exclude: /node_modules/, // Don't process external libraries.
          // Use babel-loader to transform the JavaScript code to be compatible with older browsers.
          use: {
            loader: "babel-loader",
            // Babel options that specify the presets and plugins for transformation.
            options: {
              presets: ["@babel/preset-env"], // Transform modern JavaScript into an older version.
              plugins: [
                "@babel/plugin-proposal-object-rest-spread", // Allow the use of object spread syntax.
                "@babel/transform-runtime", // Transform ES6 features that require runtime support.
              ],
            },
          },
        },
      ],
    },
  };
};
