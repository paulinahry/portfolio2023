const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/assets/cv',
            publicPath: '/_next/static/assets/cv',
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig;
