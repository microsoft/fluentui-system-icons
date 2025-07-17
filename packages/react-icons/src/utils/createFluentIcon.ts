import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";
import { makeStyles, mergeClasses } from "@griffel/react";

export type FluentIcon = {
    (props: FluentIconsProps): JSX.Element;
    displayName?: string;
}

export type CreateFluentIconOptions = {
    flipInRtl?: boolean;
    color?: boolean;
}

const useRootStyles = makeStyles({
  root: {
    "@media (forced-colors: active)": {
      forcedColorAdjust: "auto",
    },
  },
});

export const createFluentIcon = (displayName: string, width: string, pathsOrSvg: string[] | string, options?: CreateFluentIconOptions): FluentIcon => {
    const styles = useRootStyles();
    const viewBoxWidth = width === "1em" ? "20" : width;
    const Icon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<HTMLElement>) => {
        const iconState = useIconState(props, { flipInRtl: options?.flipInRtl }); // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
        const state = {
            ...iconState,
            className: mergeClasses(iconState, styles.root),
            ref,
            width, height: width, viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`, xmlns: "http://www.w3.org/2000/svg"
        };
        if (typeof pathsOrSvg === "string") {
            // Color icon: render raw SVG children
            return React.createElement(
              "svg",
              { ...state, dangerouslySetInnerHTML: { __html: pathsOrSvg } }
            );
        } else {
            // Non-color icon: render paths as before
            return React.createElement(
              "svg",
              state,
              ...pathsOrSvg.map((d) =>
                React.createElement("path",  { d, fill: state.fill })
              )
            );
        }
    }) as FluentIcon

    
    Icon.displayName = displayName;
    return Icon;
}
