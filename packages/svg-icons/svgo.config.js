const shared = require('../../importer/svgo.config.shared.cjs');
const removeFullViewBoxClip = require('./remove-full-viewbox-clip');

module.exports = {
  ...shared,
  plugins: [removeFullViewBoxClip, ...shared.plugins],
};
