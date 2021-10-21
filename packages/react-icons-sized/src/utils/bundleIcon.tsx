import * as React from "react";
import { IFluentIconsProps } from "./IFluentIconsProps.types";
import { makeStyles, mergeClasses } from "@fluentui/react-make-styles";

export const FILLED_CLASSNAME = "fluentui-icon-filled";
export const REGULAR_CLASSNAME = "fluentui-icon-regular";

const useBundledIconStyles = makeStyles({
    root: { display: "none" },
    visible: { display: "inline" }
});

const bundleIcon = (FilledIcon: React.FC<IFluentIconsProps>, RegularIcon: React.FC<IFluentIconsProps>) => {
    const Component: React.FC<IFluentIconsProps> = (props) => {
        const { className, primaryFill = 'currentColor', filled } = props;
        const styles = useBundledIconStyles();
        return (
            <React.Fragment>
                <FilledIcon
                    {...props}
                    className={mergeClasses(
                        styles.root,
                        filled && styles.visible,
                        FILLED_CLASSNAME,
                        className
                    )}
                    primaryFill={primaryFill}
                />
                <RegularIcon
                    {...props}
                    className={mergeClasses(
                      styles.root,
                      !filled && styles.visible,
                      REGULAR_CLASSNAME,
                      className
                    )}
                    primaryFill={primaryFill}
                />
            </React.Fragment>
        )
    }
    Component.displayName = "CompoundIcon";
    return Component;
}

export default bundleIcon;