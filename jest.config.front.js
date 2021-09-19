const baseConfig = require('./jest.base-config.front');

module.exports = {
  <<<<<<< advanced-settings-trad
  collectCoverageFrom: [
    'packages/core/*/admin/src/**/*.js',
    'packages/plugins/*/admin/src/**/*.js',
  ],
  globals: {
    __webpack_public_path__: 'http://localhost:4000',
    strapi: {
      backendURL: 'http://localhost:1337',
      isEE: false,
      features: [],
      projectType: 'Community',
    },
    BACKEND_URL: 'http://localhost:1337',
    ADMIN_PATH: '/admin',
    NODE_ENV: 'test',

    // FIXME create a clean config file
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>/packages/strapi-admin/node_modules',
    '<rootDir>/test/config/front',
  ],
  moduleNameMapper,
  rootDir: process.cwd(),
  setupFiles: [
    '<rootDir>/test/config/front/test-bundler.js',
    '<rootDir>/packages/admin-test-utils/lib/mocks/LocalStorageMock.js',
    '<rootDir>/packages/admin-test-utils/lib/mocks/IntersectionObserver.js',
    '<rootDir>/packages/admin-test-utils/lib/mocks/ResizeObserver.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/examples/getstarted/',
    '<rootDir>/examples/kitchensink/',
    '<rootDir>/packages/strapi-helper-plugin/dist/',
    '/OLD/',
    '__tests__',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/config/front/enzyme-setup.js',
    '<rootDir>/test/config/front/strapi.js',
  =======
  ...baseConfig,
  projects: [
    '<rootDir>/packages/core/*/jest.config.front.js',
    '<rootDir>/packages/plugins/*/jest.config.front.js',
  >>>>>>> chore/test-config
  ],
};
