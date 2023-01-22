module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './components',
            models: './models',
            constants: './constants',
            assets: './assets',
            screens: './screens',
            hooks: './hooks',
            services: './services',
            theme: './theme',
            utils: './utils'
          },
        },
      ],
    ],
  };
};
