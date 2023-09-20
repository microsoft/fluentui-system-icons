import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";
import { CreateFluentIconOptions, FluentIcon } from "./createFluentIcon";

const wrapIcon = (Icon: (iconProps: FluentIconsProps) => JSX.Element, displayName?: string, options?: CreateFluentIconOptions) => {
    const WrappedIcon = React.forwardRef((props: FluentIconsProps, ref: FluentIconsProps["ref"]) => { 
        const state = {
            ...useIconState(props, { flipInRtl: options?.flipInRtl }),
            ref
        };
        return <Icon {...state} />
    }) as FluentIcon
    WrappedIcon.displayName = displayName;
    return WrappedIcon;
}

export default wrapIcon;