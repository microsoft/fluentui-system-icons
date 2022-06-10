import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

const wrapIcon = (Icon: (iconProps: FluentIconsProps) => JSX.Element, displayName?: string) => {
    const WrappedIcon = (props: FluentIconsProps) => { 
        const state = useIconState(props);
        return <Icon {...state} />
    }
    WrappedIcon.displayName = displayName;
    return WrappedIcon;
}

export default wrapIcon;