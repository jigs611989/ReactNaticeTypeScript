module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    'react-native-slide-to-unlock':
      '<rootDir>/__mock__/react-native-slide-to-unlock.tsx',
    '@react-native-community/blur': '<rootDir>/__mock__/blurview.tsx',
    DeviceType: '<rootDir>/__mock__/DeviceTypeModule.ts',
  },
  setupFiles: ['<rootDir>/__mock__/setup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: ['<rootDir>/__mock__/', '<rootDir>/src/asset'],
};
