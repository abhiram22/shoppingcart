var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname),
        //publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: false,
        //contentBase: path.join(__dirname, 'dist'),
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude:/(node_modules|bower_components)/,
                loader :'babel-loader',
                query: {
                    "presets": ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {   
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};