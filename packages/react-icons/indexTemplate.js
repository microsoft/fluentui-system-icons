const path = require('path')
function defaultIndexTemplate(filePaths) {
	const exportEntries = filePaths.map(filePath => {
		const basename = path.basename(filePath, path.extname(filePath))
		const exportName = /^\d/.test(basename) ? `${basename}` : basename
		return `export { default as ${exportName} } from './components/${basename}'`
	})
	return exportEntries.join('\n')
}
module.exports = defaultIndexTemplate