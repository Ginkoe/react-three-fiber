module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-three-fiber': '../../packages/fiber/src/native/index.tsx',
        },
      },
    ],
  ],
}
