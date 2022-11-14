import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

type IconWithRefProps = 
    React.ForwardRefExoticComponent<FluentIconsProps & 
    React.RefAttributes<SVGSVGElement>>;

const wrapIcon = (Icon: IconWithRefProps, displayName?: string) => {
    const WrappedIcon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<SVGSVGElement>) => { 
        const state = useIconState(props);
        return <Icon ref={ref} {...state} />
    })
    WrappedIcon.displayName = displayName;
    return WrappedIcon;
}

export default wrapIcon;