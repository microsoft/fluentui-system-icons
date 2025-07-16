import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

export type WrappedIcon = (props: FluentIconsProps) => React.ReactNode;

const wrapIcon = (Icon: (iconProps: FluentIconsProps) => JSX.Element, displayName?: string): WrappedIcon => {
    const WrappedIcon = (props: FluentIconsProps) => {
        const state = useIconState(props);
        return <Icon {...state} />
    }
    WrappedIcon.displayName = displayName;
    return WrappedIcon;
}

export default wrapIcon;