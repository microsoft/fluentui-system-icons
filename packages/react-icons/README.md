@fluentui/react-icons
===

(Note: For those who were consuming `@fluentui/react-icons` v 0.x, we are releasing a new set of icons under `@fluentui/react-icons` v 1.x. You can still use 0.x version for the old icons, but if you major bump to 1.x, you will be using the new icons. The Fabric MDL2 SVG Icon set that is released with v 0.x has been rereleased in `@fluentui/react-icons-mdl2`.)

Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft.

User story
---

`@fluentui/react-icons` are SVG based icons wrapped in a React element. Because each icon is its own element, you only need to import what you need for your application. 

There are different sizes of each icon, as well as `Filled` and `Regular` versions of each icon, so you can choose what works best for your application.

There are also helpful interfaces that will allow you to add styling to fit the icons to your specific application.

User flows
---
In order to use these icons, simply import them as `import { [Componentname][size][state] } from @fluentui/react-icons` as follows:

```tsx
import { AccessTime24Filled } from "@fluentui/react-icons";
```
You can also style the icons using the `IFluentIconsProps`interface, with the `className` prop or the `primaryFill` prop.

Finally, you can bundle the `Filled` and `Regular` versions of each icon using the `bundleIcon` method. The `bundleIcon` function returns a component with both states of the icon, and provides default styling for `hover`, `active`, and `focus` states. You can then use the same props as the regular unbundled icons.

If you would like to get the bundled icon without any of the default styling, then add the `filled` prop to the new component and the icon will not have any default styling. To style this new icon, simply add `.root-span.filled` and `.root-span.regular` to your user-defined stylesheet and you will be able to surface which icon you want.


```scss
.test-span {
    .root-span.filled {
        display: none;
    }
    .root-span.regular {
        display: inline-block;
    }
}
```

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccessTime24Filled, AccessTime24Regular, bundleIcon } from "@fluentui/react-icons";
import './Test.scss';

const iconStyleProps: IFluentIconsProps = {
    primaryFill: "purple",
    className: "iconClass"
};
const BundledIcon = bundleIcon(AccessTime24Filled, AccessTime24Regular)
const rootElement = document.getElementById("root");
ReactDOM.render(
    <div>
        <AccessTime24Filled aria-label="AccessTime24Filled" {...iconStyleProps}  />
        <BundledIcon aria-label="AccessTime24" {...iconStyleProps} />
        <BundledIcon filled aria-label="AccessTime24" {...iconStyleProps} className="test-span"/>
    </div>, 
    rootElement
    )
```

Viewing the icons in a webpage
---
If you would like to view the icons in a webpage, navigate to the example folder in your terminal, and run any one of the following commands, followed by `npm run start` (note: if on a windows machine, run these commands in windows powershell):

- `npm run show16`: lists all of the size 16 icons in the package
- `npm run show20`: lists all of the size 20 icons in the package
- `npm run show24`: lists all of the size 24 icons in the package
- `npm run show28`: lists all of the size 28 icons in the package
- `npm run show48`: lists all of the size 48 icons in the package
- `npm run showAll`: lists all of the icons in the package

## Appendix and FAQ

:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `Templates` `Documentation`