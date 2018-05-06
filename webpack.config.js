var path = require ('path');

module.exports = {
entry: './script.jsx',
output: {
			path : path.resolve(__dirname, ''),
			filename: 'transpiled.js'
		},
		module: {
			loaders: [
				{
					test:/\.jsx?$/,
					loaders:'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['es2015', 'react']
					}
				},
				{
        test: /\.css$/,
        include: /node_modules/,
        use: [
            {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          }
        ]
      },
			{
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      }
			]
  }

}
