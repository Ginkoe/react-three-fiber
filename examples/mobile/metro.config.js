/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')
const exclusionList = require('metro-config/src/defaults/exclusionList')

const reactNativeLib = path.resolve(__dirname, '../../packages/fiber/src/native')

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [path.resolve(__dirname, 'node_modules'), reactNativeLib],
  resolver: {
    blockList: exclusionList([new RegExp(`^${escape(path.resolve(__dirname, '../../', 'node_modules'))}\/.*$`)]),
  },
}
