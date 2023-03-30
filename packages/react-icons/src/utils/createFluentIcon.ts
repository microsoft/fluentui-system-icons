import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

export type FluentIcon = {
    (props: FluentIconsProps<React.SVGAttributes<SVGElement>>): JSX.Element;
    displayName: string | undefined;
}

export const createFluentIcon = (displayName: string, width: string, paths: string[]): FluentIcon => {
    const viewBoxWidth = width === "1em" ? "20" : width;
    const Icon = (props: FluentIconsProps) => {
        props = {
            ...useIconState(props), // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
            width, height: width, viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`, xmlns: "http://www.w3.org/2000/svg"
        };
        return React.createElement(
            "svg",
            props,
            ...paths.map((d) =>
                React.createElement("path", {
                    d,
                    fill: props.fill, // We are designating primaryFill as the primary color for filling. If not provided, it defaults to null
                    // key: i // The key for static children is needless 
                })
            )
        );
    }
    Icon.displayName = displayName;
    return Icon;
}
