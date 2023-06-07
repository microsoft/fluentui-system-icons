import * as React from "react";

export type FluentIconsProps<TBaseAttributes extends (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) = React.SVGAttributes<SVGElement>> 
= TBaseAttributes & React.RefAttributes<HTMLElement> & {
	primaryFill?: string
	className?: string
	filled?: boolean
	title?: string
}