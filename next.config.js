const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps')();
const fonts = require('next-fonts');

const cssConfig = {
  cssModules: true,
};

const fontsConfig = {
  enableSvg: true,
};

module.exports = withPlugins([
  [css, cssConfig],
  [fonts, fontsConfig],
]);

module.exports = withSourceMaps({
  env: {
    MIRROR_API_BASE_URL:
      process.env.MIRROR_API_BASE_URL || 'http://localhost:3000/api/v1',
    PROD_API_BASE_URL:
      process.env.PROD_API_BASE_URL ||
      'https://6036d89c54350400177214f8.mockapi.io/api/v1',
  },
});
