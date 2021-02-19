function template(
	{ template },
	opts,
	{ imports, interfaces, componentName, props, jsx, exports }
) {
	const plugins = ['jsx', 'typescript']
	const tpl = template.smart({ plugins })

	componentName.name = componentName.name.substring(3)
	exports.declaration.name = componentName.name

	return tpl.ast`
		import * as React from "react"
		import { JSX } from "react-jsx"

		import { IFluentIconsProps } from '../IFluentIconsProps.types'

		const ${componentName} = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>) : JSX.Element=> {
		const { primaryFill = "#212121", className } = iconProps;
		return ${jsx};
		}
		
		${exports}
	`
}

module.exports = template