var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jQuery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jQuery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules', './app/components', './app/api'
        ],
        alias: {
            app: 'app',
            configureStore: 'app/store/configureStore.jsx',
            reducers: 'app/reducers/reducers.jsx',
            actions: 'app/actions/actions.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'babel-preset-stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.scss$/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};