@fluentui/react-icons
===

***IMPORTANT PLEASE READ***
@fluentui/react-icons has been major bumped to 2.x. There are some key changes in the api and usages. The main ones are:
- The general icons are now resizeable using styling(i.e. scaling using the `height` and `width` props or using `fontSize` prop, etc). Ex: `<AccessTimeFilled fontSize={40}>`
- There is now a more general icon offering included with the sized icons. Instead of importing `<AccessTime24Filled>`, you just import `<AccessTimeFilled>`.
- The sized icons are still available, and are recommended if you know the specific size you want your icons to be. For the general case, the more general icons are available to you.

(Note: For those who were consuming `@fluentui/react-icons` v 0.x, we are releasing a new set of icons under `@fluentui/react-icons` v 1.x. You can still use 0.x version for the old icons, but if you major bump to 1.x, you will be using the new icons. The Fabric MDL2 SVG Icon set that is released with v 0.x has been rereleased in `@fluentui/react-icons-mdl2`.)

Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft.

User story
---

`@fluentui/react-icons` are SVG based icons wrapped in a React element. Because each icon is its own element, you only need to import what you need for your application. 

There are two different states of each icon, `Filled` and `Regular`, so you can choose what works best for your application. These are by default sized to `1em`, and can be scaled up or down to suit your developer needs.

There are also helpful interfaces that will allow you to add styling to fit the icons to your specific application.



User flows
---
In order to use these icons, simply import them as `import { [Componentname][state] } from @fluentui/react-icons` as follows: 

```tsx
import { AccessTimeFilled } from "@fluentui/react-icons";
```

The previous icon offerings are scalable, but if you know what size you want to use for your icons, and you are not planning on using multiple sizes, it is recommended to use the sized icons. These are the same icons as the general case, but in multiple different sizes, built to look pixel perfect at those specific sizes.
You can import the sized icons in a similar way:

```tsx
import { AccessTime24Filled } from "@fluentui/react-icons";
```

You can also style the icons using the `FluentIconsProps` interface, with the `className` prop or the `primaryFill` prop.

Finally, you can bundle the `Filled` and `Regular` versions of each icon into a compound icon component using the `bundleIcon` method. The `bundleIcon()` function returns a component with both states of the icon, and you can then use the classnames `iconFilledClassName` and `iconRegularClassName` to style this compound component.

If you would like to get the bundled icon without any of the default styling, then add the `filled` prop to the new component and the icon will not have any default styling. To style this new icon, add a user defined stylesheet to the icon component.


```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { 
    AccessTimeFilled, 
    AccessTimeRegular,
    bundleIcon,
    iconFilledClassName,
    iconRegularClassName
} from "@fluentui/react-icons";
import { makeStyles } from "@fluentui/react-make-styles";


const iconStyleProps: FluentIconsProps = {
    primaryFill: "purple",
    className: "iconClass"
};

const useIconStyles = makeStyles({
    icon: {
        ":hover": {
            [`& .${iconFilledClassName}`]: {
                display: "none"
            },
            [`& .${iconRegularClassName}`]: {
                display: "inline"
            }
        }
    }
})

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular)
const rootElement = document.getElementById("root");
const styles = useIconStyles();
ReactDOM.render(
    <div className={styles.icon}>
        <AccessTime aria-label="AccessTime" {...iconStyleProps} />
    </div>, 
    rootElement
    )
```

Using the icon font
---
If, for performance or other reasons, you wish to use the font implementation of these icons rather than the SVG implementation, you can specify `"fluentIconFont"` as a condition for the import, either via [Node >= 12.19.0](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#resolving-user-conditions) or [webpack >= 5.0.0](https://webpack.js.org/configuration/resolve/#resolveconditionnames).

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    conditionNames: ['fluentIconFont', 'require', 'node'],
  },
};
```

If you do choose this route, you may wish to use `@fluentui/react-icons-font-subsetting-webpack-plugin` to optimize the font assets.

Viewing the icons in a webpage
---
You can view the full list of available icons by type: [regular](https://github.com/microsoft/fluentui-system-icons/blob/master/icons_regular.md) or [filled](https://github.com/microsoft/fluentui-system-icons/blob/master/icons_filled.md)

## Appendix and FAQ

:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `Templates` `Documentation`