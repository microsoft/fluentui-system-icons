import * as React from "react";
import { IFluentIconsProps } from "./IFluentIconsProps.types";
import { useIconState } from "./useIconState";

const wrapIcon = (icon: JSX.Element, displayName?: string) => {
    const Component: React.FC<IFluentIconsProps> = (props) => { 
        const state = useIconState(props);
        return (
                React.cloneElement(
                    icon,
                    {   
                        ...state
                    }
                )
        )
    }
    Component.displayName = displayName;
    return Component;
}

export default wrapIcon;