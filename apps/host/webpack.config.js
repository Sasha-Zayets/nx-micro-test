const { ModuleFederationPlugin } = require('webpack').container;
const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = (config, context) => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          silpo: `promise new Promise(resolve => {
              const script = document.createElement('script')
              script.src = 'https://silpo.local:8888/remoteEntry.js'
              script.onload = () => {
                resolve(window['silpo'])
              }
              document.head.appendChild(script);
            })
            `,
        },
        shared: {
          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        },
      }),
    ],
  };
};
