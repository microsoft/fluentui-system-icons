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
    /**
     * Prefix applied to the locally-scoped SVG `id`s (gradients, clip paths, filters) of a
     * `Color` icon variant, along with their matching `url(#…)` references. Use a unique value
     * per rendered instance to avoid global DOM id collisions when the same color icon appears
     * multiple times on a page.
     *
     * NOTE: This prop only applies to `Color` icon variants; it is ignored by mono-color icons.
     */
    idPrefix?: string;
    /**
     * Sets the rendered size of a **resizable** icon. For SVG icons this maps to the `font-size`
     * presentation attribute (the icon is `1em`); for font icons it maps to the `font-size` CSS
     * style. Exposing it on both keeps the prop working when an icon is switched between the SVG
     * and font variants.
     *
     * NOTE: **Sized** variants (e.g. `Send24Regular`) render at their fixed design size and ignore
     * this prop in both SVG and font form.
     */
    fontSize?: string | number;
  };
