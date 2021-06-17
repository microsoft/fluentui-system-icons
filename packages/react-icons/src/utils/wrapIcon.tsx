import * as React from "react";
import { css } from "./css";
import "./WrappedIcon.scss";
import { IFluentIconsProps } from "./IFluentIconsProps.types";

const wrapIcon = (icon: JSX.Element, displayName?: string) => {
    const Component: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps> = (props) => {
        const { className, primaryFill = 'currentColor' } = props;
        const containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
        ? {
            role: 'img',
          }
        : {
            ['aria-hidden']: true,
          };
            
        return (
            <span  {...props} {...containerProps} className={css("root-span", className)}>
                {React.cloneElement(
                    icon,
                    {   
                        className: "svg",
                        fill: primaryFill
                    }
                )}
            </span>
        )
    }
    Component.displayName = displayName;
    return Component;
}

export default wrapIcon;