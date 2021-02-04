function template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
) {
    const plugins = ['jsx']
	const tpl = template.smart({ plugins })
	
	componentName.name = componentName.name.substring(3)
	exports.declaration.name = componentName.name

    return tpl.ast`
        ${imports}
        function ${componentName}(${props}) {
            return ${jsx};
        }
        ${exports}
    `
}

module.exports = template