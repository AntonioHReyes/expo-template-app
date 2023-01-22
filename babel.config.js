module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './components',
            constants: './constants',
            hooks: './hooks',
            models: './models',
            navigation: './navigation',
            screens: './screens',
            services: './services',
            theme: './theme',
            utils: './utils'
          },
        },
      ],
    ],
  };
};
