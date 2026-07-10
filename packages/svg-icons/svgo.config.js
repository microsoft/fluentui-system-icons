// Re-exports the shared SVGO config so raw-SVG processing stays identical to
// @fluentui/react-icons, letting this package serve as the optimized-SVG base.
// See importer/svgo.config.shared.cjs for details.
module.exports = require('../../importer/svgo.config.shared.cjs');
