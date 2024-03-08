const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    nextScriptWorkers: true,
  },

  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },

}

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Adicione o plugin de minificação ao Webpack
    if (!dev) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remover chamadas de console.log()
            },
          },
        }),
      ];
    }

    return config;
  },
};


//module.exports = nextConfig

 /*module.exports = {
//   exportPathMap: async function () {
//     return {
//       '/': { page: '/' }, // home
//       '/aniversario/aniversario': { page: '/aniversario' }, // aniversario
//       '/tournament/tournament': { page: '/tournament' }, // tournament
//       '/ranking/ranking': { page: '/ranking' }, // ranking
//     };
//   },
 };*/


