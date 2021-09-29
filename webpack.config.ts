import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
/** TYPE DEF */
type WEBPACK_CLI_ENV = {
    production: boolean;
};
/** */

/** SETTING */
const OUT_DIR = "dist";
/** */

export default function (env: WEBPACK_CLI_ENV): webpack.Configuration {
    return {
        mode: env.production ? "production" : "development",
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, OUT_DIR),
            filename: "[name].[fullhash:6].js",
        },
        devtool: env.production ? false : "eval",
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        env.production ? MiniCssExtractPlugin.loader : "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: env.production ? false : true,
                            },
                        },
                    ],
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        env.production ? MiniCssExtractPlugin.loader : "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: env.production ? false : true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: env.production ? false : true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(svg|png|jpg|jpeg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[path].[name].[ext]",
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 100000,
                        },
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[fullhash:6].css",
                chunkFilename: "[id].[chunkhash]css",
            }),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all",
                    },
                },
            },
        },
        resolve: {
            extensions: [".jsx", ".js", ".tsx", ".ts"],
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "~": path.resolve(__dirname, "./"),
            },
        },
        performance: {
            maxEntrypointSize: 800000
        },
        //@ts-ignore
        devServer: {
            historyApiFallback: true,
            hot: true,
            port: 8080
        },
    };
}
