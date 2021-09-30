import * as React from "react";
import { IFluentIconsProps } from "./IFluentIconsProps.types";
import { useIconState } from "./useIconState";




const wrapIcon = (Icon: JSX.Element, displayName?: string) => {
    const Component: React.FC<IFluentIconsProps> = (props) => {
        const iconProps = useIconState(props);
        return (
            React.cloneElement(
                Icon,
                {
                    ...iconProps
                }
            )
        )
    }
    Component.displayName = displayName;
    return Component;
}
console.log("wrapIcon")
export default wrapIcon;