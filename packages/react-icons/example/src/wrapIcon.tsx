import * as React from "react";
import { IFluentIconsProps } from "./IFluentIconsProps.types";

const wrapIcon = (icon: JSX.Element) => {
    const Component: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps> = (props) => {
        const containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
        ? {
            'aria-label': props['aria-label'],
            role: 'img',
          }
        : {
            ['aria-hidden']: true,
          };
            
        return (
            <span {...containerProps}>
                {React.cloneElement(
                    icon,
                    {
                        className:  props.className,
                        primaryFill: props.primaryFill
                    }
                )}
            </span>
        )
    }
    return Component;
}

export default wrapIcon;