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
  publicRuntimeConfig: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_KEY: process.env.EMAIL_KEY,
  },
  
}

module.exports = nextConfig;
