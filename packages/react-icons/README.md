@fluentui/react-icons
===

***IMPORTANT PLEASE READ***
@fluentui/react-icons has been major bumped to 2.x. There are some key changes in the api and usages. The main ones are:
- The icons are now resizeable. There are no longer different sizes of the same icons. There is only one size, and it is scalable using styling(i.e. scaling using the `height` and `width` props or using `fontSize` prop, etc)
- The sized icons have been moved to a new package, `@fluentui/react-icons-sized`. You will be able to find all of the icons that were available in 1.x, in all the available sizes.
- The recommended way to import the icons has changed, to speed up rendering on a webpage. The icons should be imported as so: `import { AccessTimeFilled } from "@fluentui/react-icons/lib/AccessTimeFilled"`. The rest of the README will have this info reflected as well.

(Note: For those who were consuming `@fluentui/react-icons` v 0.x, we are releasing a new set of icons under `@fluentui/react-icons` v 1.x. You can still use 0.x version for the old icons, but if you major bump to 1.x, you will be using the new icons. The Fabric MDL2 SVG Icon set that is released with v 0.x has been rereleased in `@fluentui/react-icons-mdl2`.)

Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft.

User story
---

`@fluentui/react-icons` are SVG based icons wrapped in a React element. Because each icon is its own element, you only need to import what you need for your application. 

There are two different states of each icon, `Filled` and `Regular`, so you can choose what works best for your application.

There are also helpful interfaces that will allow you to add styling to fit the icons to your specific application.

These icons are scalable, but if you know what size you want to use for your icons, and you are not planning on using multiple sizes, it is recommended to use the icons found in `@fluentui/react-icons-sized`. These are the same icons as those available here, but in multiple different sizes, built to look pixel perfect at those specific sizes.


User flows
---
In order to use these icons, simply import them as `import { [Componentname][state] } from @fluentui/react-icons` as follows:

```tsx
import { AccessTimeFilled } from "@fluentui/react-icons/lib/AccessTimeFilled";
```
You can also style the icons using the `IFluentIconsProps`interface, with the `className` prop or the `primaryFill` prop.

Finally, you can bundle the `Filled` and `Regular` versions of each icon using the `bundleIcon` method. The `bundleIcon` function returns a component with both states of the icon, and provides default styling for `hover`, `active`, and `focus` states. You can then use the same props as the regular unbundled icons.

If you would like to get the bundled icon without any of the default styling, then add the `filled` prop to the new component and the icon will not have any default styling. To style this new icon, add a user defined stylesheet to the icon component.


```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccessTimeFilled } from "@fluentui/react-icons/lib/AccessTimeFilled" 
import { AccessTimeRegular } from "@fluentui/react-icons/lib/AccessTimeRegular"
import { bundleIcon } from "@fluentui/react-icons/lib/utils/bundleIcon";


const iconStyleProps: IFluentIconsProps = {
    primaryFill: "purple",
    className: "iconClass"
};
const AccessTime24 = bundleIcon(AccessTime24Filled, AccessTime24Regular)
const rootElement = document.getElementById("root");
ReactDOM.render(
    <div>
        <AccessTime24Filled aria-label="AccessTime24Filled" {...iconStyleProps}  />
        <AccessTime24 aria-label="AccessTime24" {...iconStyleProps} />
        <AccessTime24 filled aria-label="AccessTime24" {...iconStyleProps} className="test-span"/>
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