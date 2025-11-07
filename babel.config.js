module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ❌ Removemos o 'react-native-worklets/plugin'
      'react-native-reanimated/plugin', // ✅ precisa ser o último plugin sempre
    ],
  };
};
