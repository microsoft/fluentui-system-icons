import * as React from "react";

export type FluentIconsProps<
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
  TRefType extends HTMLElement | SVGSVGElement = SVGSVGElement
> = TBaseAttributes &
  React.RefAttributes<TRefType> & {
    primaryFill?: string;
    className?: string;
    filled?: boolean;
    title?: string;
    children?: React.ReactNode;
  };
