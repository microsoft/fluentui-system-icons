@fluentui/react-icons-sized
===


Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft.

User story
---

`@fluentui/react-icons-sized` are SVG based icons wrapped in a React element. Because each icon is its own element, you only need to import what you need for your application. 

There are different sizes of each icon, as well as `Filled` and `Regular` versions of each icon, so you can choose what works best for your application.

There are also helpful interfaces that will allow you to add styling to fit the icons to your specific application.

User flows
---
In order to use these icons, simply import them as `import { [Componentname][size][state] } from @fluentui/react-icons-sized` as follows:

```tsx
import { AccessTime24Filled } from "@fluentui/react-icons-sized";
```
You can also style the icons using the `IFluentIconsProps`interface, with the `className` prop or the `primaryFill` prop.

Finally, you can bundle the `Filled` and `Regular` versions of each icon into a compound icon component using the `bundleIcon` method. The `bundleIcon` function returns a component with both states of the icon, and you can then use the classnames `FILLED_CLASSNAME` and `REGULAR_CLASSNAME` to style this compound component

If you would like to get the bundled icon without any of the default styling, then add the `filled` prop to the new component and the icon will not have any default styling. To style this new icon, add a user defined stylesheet to the icon component.


```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccessTime24Filled, Access24TimeRegular, bundleIcon } from "@fluentui/react-icons-sized";
import { makeStyles } from "@fluentui/react-make-styles";


const iconStyleProps: IFluentIconsProps = {
    primaryFill: "purple",
    className: "iconClass"
};

const useIconStyles = makeStyles({
    icon: {
        ":hover": {
            [`& .${FILLED_CLASSNAME}`]: {
                display: "none"
            },
            [`& .${REGULAR_CLASSNAME}`]: {
                display: "inline"
            }
        }
    }
})

const AccessTime24 = bundleIcon(AccessTimeFilled, AccessTimeRegular)
const rootElement = document.getElementById("root");
const styles = useIconStyles();
ReactDOM.render(
    <div className={styles.icon}>
        <AccessTime24 aria-label="AccessTime24" {...iconStyleProps} />
    </div>, 
    rootElement
    )
```

Viewing the icons in a webpage
---
You can view the full list of available icons [here](https://github.com/microsoft/fluentui-system-icons/blob/master/icons.md)


## Appendix and FAQ

:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `Templates` `Documentation`