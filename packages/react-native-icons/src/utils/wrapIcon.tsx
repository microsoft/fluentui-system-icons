import * as React from "react";
import { FluentReactNativeIconsProps } from "./FluentReactNativeIconsProps.types";
import { useIconState } from "./useIconState";

const wrapIcon = (Icon: (iconProps: FluentReactNativeIconsProps) => JSX.Element, displayName?: string) => {
    const WrappedIcon = (props: FluentReactNativeIconsProps) => { 
        const state = useIconState(props);
        return <Icon {...state} />
    }
    WrappedIcon.displayName = displayName;
    return WrappedIcon;
}

export default wrapIcon;