import * as React from "react";
import { iconFilledClassName, iconRegularClassName } from "./constants";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { makeStyles, mergeClasses } from "@griffel/react";
import { FluentIcon } from "./createFluentIcon";

const useBundledIconStyles = makeStyles({
    root: { display: "none" },
    visible: { display: "inline" }
});

const bundleIcon = (FilledIcon: FluentIcon, RegularIcon: FluentIcon) => {
    const Component: FluentIcon = (props) => {
        const { className, primaryFill = 'currentColor', filled, ...rest } = props;
        const styles = useBundledIconStyles();
        return (
            <React.Fragment>
                <FilledIcon
                    {...rest}
                    className={mergeClasses(
                        styles.root,
                        filled && styles.visible,
                        iconFilledClassName,
                        className
                    )}
                    primaryFill={primaryFill}
                />
                <RegularIcon
                    {...rest}
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
