import * as React from 'react';

export type FluentIconsProps<
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
  TRefType extends HTMLElement | SVGSVGElement = SVGSVGElement,
> = TBaseAttributes &
  React.RefAttributes<TRefType> & {
    primaryFill?: string;
    className?: string;
    title?: string;
    /**
     * Whether to render the filled version of the icon.
     * NOTE: This prop is only applicable when using bundled icons created with `bundleIcon`.
     */
    filled?: boolean;
  };
