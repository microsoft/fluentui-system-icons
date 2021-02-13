function template(
	{ template },
	opts,
	{ imports, interfaces, componentName, props, jsx, exports }
) {
	const plugins = ['jsx', 'typescript']
	const tpl = template.smart({ plugins })
	
	componentName.name = componentName.name.substring(3)
	interfaceName = 'I' + componentName.name
	combinedExport = '{ ' + interfaceName + ', ' + componentName.name + ' }'
	exports.declaration.name = componentName.name

	return tpl.ast`
		${imports}

		interface ${interfaceName} {
			primary?: string
}

		const ${componentName} = (props: ${interfaceName}) => {
		return ${jsx};
		}
		
		export const ${combinedExport}
	`
}

module.exports = template