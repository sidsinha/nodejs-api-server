module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.min.js"
    },
    module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
};