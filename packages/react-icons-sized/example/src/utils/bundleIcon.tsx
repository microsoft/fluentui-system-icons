import * as React from "react";
import { IFluentIconsProps } from "./IFluentIconsProps.types";
import { makeStyles, mergeClasses } from "@fluentui/react-make-styles";

const getIconName = (Icon: React.FC<IFluentIconsProps>): string => {
    const displayName = Icon.displayName ? Icon.displayName.endsWith("Filled") ? Icon.displayName.substring(0, Icon.displayName.length - 6) : Icon.displayName.substring(0, Icon.displayName.length - 7) : '';
    return displayName;
}

const useBundleStyles = makeStyles({
    regular: theme => ({
        display: 'inline',
        position: 'absolute',
        //opacity: 1,
        ':hover': { display: 'none' },
    }),
    fill: theme => ({
        position: 'absolute',
        //opacity: 0,
        display: 'none',
        ':hover': { display: 'inline' },
    }),
    filled_regular: theme => ({
        position: 'absolute',
        //opacity: 0,
        display: 'none',
        ':active': { display: 'inline', opacity: 1 },
        ':hover': { display: 'inline', opacity: 1 },
        ':focus': { display: 'inline', opacity: 1 }
    }),
    filled_fill: theme => ({
        display: 'inline',
        position: 'absolute',
        //opacity: 1,
        ':active': { display: 'none', opacity: 0 },
        ':hover': { display: 'none', opacity: 0 },
        ':focus': { display: 'none', opacity: 0 }
    })
})

const bundleIcon = (Icon1: React.FC<IFluentIconsProps>, Icon2: React.FC<IFluentIconsProps>) => {
    const displayName = getIconName(Icon1);
    const Component: React.FC<IFluentIconsProps> = ({
        primaryFill="currentColor",
        ...props}) => {
        const { className, filled } = props;
        const classes = useBundleStyles();
        /** Checks to see what order the icons were passed in */
        const isReg = Icon1.displayName ? Icon1.displayName.endsWith("Regular") ? true : false : false;
        return (
            filled ? 
                isReg ? 
                <>
                    <Icon1 className={mergeClasses(classes.filled_regular, className)} primaryFill={primaryFill} {...props} />
                    <Icon2 className={mergeClasses(classes.filled_fill, className)} primaryFill={primaryFill} {...props} />
                </>
                    :
                <>
                    <Icon1 className={mergeClasses(classes.filled_fill, className)} primaryFill={primaryFill} {...props} />
                    <Icon2 className={mergeClasses(classes.filled_regular, className)} primaryFill={primaryFill} {...props} />
                </>

            :

                isReg ? 
                <>
                    <Icon1 className={mergeClasses(classes.regular, className)} primaryFill={primaryFill} {...props} />
                    <Icon2 className={mergeClasses(classes.fill, className)} primaryFill={primaryFill} {...props} />
                </>
                    :
                <>
                    <Icon1 className={mergeClasses(classes.fill, className)} primaryFill={primaryFill} {...props} />
                    <Icon2 className={mergeClasses(classes.regular, className)} primaryFill={primaryFill} {...props} />
                </>
        )
    }
    Component.displayName = displayName;
    return Component;
}

export default bundleIcon;