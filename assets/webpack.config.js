const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// helpers for writing path names
// e.g. join('web/static') => '/full/disk/path/to/hello/web/static'
const join = dest => path.resolve(__dirname, dest);
const web = dest => join(`${dest}`);

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const publicUrl = '/dist';

const loaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  {
    test: /\.json$/,
    use: [
      {
        loader: 'json-loader',
      },
    ],
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: 'css-loader!postcss-loader',
      fallback: 'style-loader',
    }),
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: 'css-loader!postcss-loader!sass-loader',
      fallback: 'style-loader',
    }),
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      use: 'css-loader!postcss-loader!less-loader',
      fallback: 'style-loader',
    }),
  },
  {
    test: /\.(ttf|eot|woff|woff2|svg)$/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
  {
    test: /\.(jpe?g|png|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
];

const resolve = {
  extensions: ['.js', '.jsx'],
  alias: {
    phoenix_html: join('deps/phoenix_html/web/static/js/phoenix_html.js'),
    phoenix: join('deps/phoenix/web/static/js/phoenix.js'),
    '../../theme.config$': path.join(__dirname, 'css/theme.config'),
  },
};

module.exports = [
  {
    entry: {
      // configure the bundle entry points
      app: [web('src/App.jsx')],
    },
    output: {
      path: join('../priv/static/dist'),
      publicPath: `${publicUrl}/`,
      filename: 'js/[name].js',
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    plugins: [
      new CleanWebpackPlugin([join('priv/static/dist')], { root: `${__dirname}/..` }),
      new CopyWebpackPlugin([{
        from: web('static'),
        to: join('../priv/static/dist'),
      }]),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(nodeEnv),
        },
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true,
      }),
    ],
    resolve,
    module: {
      loaders,
    },
  },
  {
    entry: {
      server: web('src/Index.jsx'),
    },
    output: {
      path: join('../priv/static/dist'),
      filename: 'js/[name].js',
      library: 'dl',
      libraryTarget: 'commonjs2',
    },
    module: {
      loaders,
    },
    resolve,
  },
];
