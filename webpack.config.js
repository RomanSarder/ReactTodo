const webpack = require('webpack');
const env = require('node-env-file');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
    env(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'API_KEY': JSON.stringify(process.env.API_KEY),
                'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
                'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
                'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET)
            }
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
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};