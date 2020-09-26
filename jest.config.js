module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@react-navigation/native': '<rootDir>/__mock__/react-navigation.js',
  },
  setupFiles: ['<rootDir>/__mock__/setup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
