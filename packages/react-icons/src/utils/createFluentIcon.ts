import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

export type FluentIcon = {
    (props: FluentIconsProps): JSX.Element;
    displayName?: string;
}

export type CreateFluentIconOptions = {
    flipInRtl?: boolean;
    // rtlPaths?: string[];
}

export const createFluentIcon = (displayName: string, width: string, paths: string[], options?: CreateFluentIconOptions): FluentIcon => {
    const viewBoxWidth = width === "1em" ? "20" : width;
    const Icon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<HTMLElement>) => {
        const state = {
            ...useIconState(props, { flipInRtl: options?.flipInRtl }), // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
            ref,
            width, height: width, viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`, xmlns: "http://www.w3.org/2000/svg"
        };
        return React.createElement(
            "svg",
            state,
            ...paths.map((d) =>
                React.createElement("path", {
                    d,
                    fill: state.fill, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null
                    // key: i // The key for static children is needless 
                })
            )
        );
    }) as FluentIcon
    Icon.displayName = displayName;
    return Icon;
}
