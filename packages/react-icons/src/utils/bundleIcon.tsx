import * as React from "react";
import { iconFilledClassName, iconRegularClassName } from "./constants";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@fluentui/react-make-styles";

const useBundledIconStyles = makeStyles({
    root: { display: "none" },
    visible: { display: "inline" }
});

const bundleIcon = (FilledIcon: React.FC<FluentIconsProps>, RegularIcon: React.FC<FluentIconsProps>) => {
    const Component: React.FC<FluentIconsProps> = (props) => {
        const { className, primaryFill = 'currentColor', filled } = props;
        const styles = useBundledIconStyles();
        return (
            <React.Fragment>
                <FilledIcon
                    {...props}
                    className={mergeClasses(
                        styles.root,
                        filled && styles.visible,
                        iconFilledClassName,
                        className
                    )}
                    primaryFill={primaryFill}
                />
                <RegularIcon
                    {...props}
                    className={mergeClasses(
                      styles.root,
                      !filled && styles.visible,
                      iconRegularClassName,
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