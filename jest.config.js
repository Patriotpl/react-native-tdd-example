module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!react-native|@react-native|react-clone-referenced-element|react-navigation|react-native-linear-gradient)',
  ],
};
