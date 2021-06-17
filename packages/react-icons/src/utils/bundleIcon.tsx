import * as React from "react";
import { css } from "./css";
import { IFluentIconsProps } from "./IFluentIconsProps.types";
import "./BundledIcon.scss";

const getIconName = (Icon: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>): string => {
    const displayName = Icon.displayName ? Icon.displayName.endsWith("Filled") ? Icon.displayName.substring(0, Icon.displayName.length - 6) : Icon.displayName.substring(0, Icon.displayName.length - 7) : '';
    return displayName;
}

const bundleIcon = (Icon1: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>, Icon2: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>) => {
    const displayName = getIconName(Icon1);
    const Component: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps> = (props) => {
        const { className, primaryFill = 'currentColor', filled } = props;
        /** Checks to see what order the icons were passed in */
        const isReg = Icon1.displayName ? Icon1.displayName.endsWith("Regular") ? true : false : false;
        const containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
        ? {
            role: 'img',
          }
        : {
            ['aria-hidden']: true,
          };  
        
        return (
            filled ? 
                isReg ? 
                <>
                    <span {...props} {...containerProps} className={css("bundled-icon-span-filled", className)}>
                        <Icon1 className="regular" primaryFill={primaryFill} />
                        <Icon2 className="filled" primaryFill={primaryFill} />
                    </span>
                </>
                    :
                <>
                    <span {...props} {...containerProps} className={css("bundled-icon-span-filled", className)}>
                        <Icon1 className="filled" primaryFill={primaryFill} />
                        <Icon2 className="regular" primaryFill={primaryFill} />
                    </span>
                </>

            :

                isReg ? 
                <>
                    <span {...props} {...containerProps} className={css("bundled-icon-span", className)}>
                        <Icon1 className="regular" primaryFill={primaryFill} />
                        <Icon2 className="filled" primaryFill={primaryFill} />
                    </span>
                </>
                    :
                <>
                    <span {...props} {...containerProps} className={css("bundled-icon-span", className)}>
                        <Icon1 className="filled" primaryFill={primaryFill} />
                        <Icon2 className="regular" primaryFill={primaryFill} />
                    </span>
                </>
        )
    }
    Component.displayName = displayName;
    return Component;
}

export default bundleIcon;