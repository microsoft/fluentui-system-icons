import * as React from "react";

export interface FluentIconsProps extends React.SVGAttributes<SVGElement> {
	primaryFill?: string
	className?: string
	filled?: boolean
	title?: string
}