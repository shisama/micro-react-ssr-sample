const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src', 'client.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
}