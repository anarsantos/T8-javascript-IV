// este arquivo irá fazer as configurações
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output:{
        filename:"principal.js",
        path: __dirname + '/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"estilo.css"
        })
    ],
    module:{
        rules: [{
            test: /\.s?[ac]ss$/,
            // regex - pega os arquivos com final ".css"
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}