import * as React from "react";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { useIconState } from "./useIconState";

const wrapIcon = (Icon: React.ForwardRefExoticComponent<React.SVGAttributes<SVGElement> & FluentIconsProps & React.RefAttributes<SVGElement>>, displayName?: string) => {
    const WrappedIcon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<SVGElement>) => { 
        const state = useIconState(props);
        return <Icon ref={ref} {...state} />
    })
    WrappedIcon.displayName = displayName;
    return WrappedIcon;
}

export default wrapIcon;