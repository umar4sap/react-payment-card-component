const path = require('path')
const postcssUrlRebase = require('./postcssUrlRebase')

const appSrc = path.resolve(__dirname, '../src')

module.exports = {
  mode: 'production',
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: 1000000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
              {
                loader: require.resolve('image-webpack-loader'),
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 75,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: '75-90',
                    speed: 4,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-import'),
                    require('postcss-url')({ url: postcssUrlRebase }),
                    require('postcss-cssnext'),
                  ],
                },
              },
            ],
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
}
