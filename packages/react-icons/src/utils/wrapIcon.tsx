import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

const wrapIcon = (icon: JSX.Element, displayName?: string) => {
    const Component: React.FC<FluentIconsProps> = (props) => { 
        const state = useIconState(props);
        return (React.cloneElement(icon,state))
    }
    Component.displayName = displayName;
    return Component;
}

export default wrapIcon;