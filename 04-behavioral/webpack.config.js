const path = require('path');
module.exports = {
    entry: [
        "@babel/polyfill",
        path.resolve(__dirname,'src/js/index.js')
    ],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port:9000
      },
    module:{
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            }
        ]
    }
}