const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function () {
	p.gulp.task("js", function () {
		const webpackMode = develop ? 'development' : 'production';
		return (
			p.gulp
			.src(p.paths.src.js)
			.pipe(p.gp.newer(p.paths.build.js))
			.pipe(
				p.gp.plumber({
					errorHandler: p.gp.notify.onError(function (error) {
						return {
							title: "JavaScript - ошибка при сборке .js",
							message: error.message,
						};
					}),
				})
			) // Предотвращает остановку плагина при возникновении ошибки
			.pipe(webpackStream({
				mode: webpackMode,
				output: {
					// filename: 'app.min.js',
          filename: '[name].min.js',
				},
				node: {
					fs: 'empty'
				},
				module: {
					rules: [{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/preset-react', '@babel/preset-env']
						}
					}]
				},
				plugins: [
          new webpack.ProvidePlugin({
						Blazy: 'blazy',
					}),
					// new webpack.ProvidePlugin({
					// 	$: 'jquery',
					// 	jQuery: 'jquery',
					// 	"window.jQuery": "jquery"
					// }),
					new webpack.ProvidePlugin({
						identifier: 'jquery-ui',
						// ...
					})
				],
				// externals: {
				// 	$: 'jquery',
				// 	jQuery: 'jquery',
				// 	"window.jQuery": "jquery"
				// },
				optimization: {
					minimizer: [
						new TerserPlugin({
							sourceMap: true,
              terserOptions: {
              compress: {
                      drop_console: webpackMode === 'production',
                  }
              }
						}),
					],
          splitChunks: {
            cacheGroups: {
              default: false,
              vendors: false,
              // vendor chunk
              vendor: {
                // sync + async chunks
                name: 'shared',
                chunks: 'all',
                // import file path containing node_modules
                test: /node_modules/
              },
            }
            // chunks: 'all',
          },
				},
			}))
			.pipe(p.gulp.dest(p.paths.build.js))
			.pipe(
				p.browserSync.reload({
					compress: true,
					stream: true,
				})
			)
		);
	});
};
