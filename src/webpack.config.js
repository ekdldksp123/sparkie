const webpack = require("webpack");
require("dotenv").config();

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
    ],
    node: {
        fs: "empty",
    }
};
