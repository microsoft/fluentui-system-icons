import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
declare const bundleIcon: (FilledIcon: React.FC<FluentIconsProps>, RegularIcon: React.FC<FluentIconsProps>) => React.FC<React.SVGAttributes<SVGElement> & {
    primaryFill?: string | undefined;
    className?: string | undefined;
    filled?: boolean | undefined;
    title?: string | undefined;
}>;
export default bundleIcon;
