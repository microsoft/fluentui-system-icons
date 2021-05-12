@fluentui/react-icons
===

(Note: For those who were consuming `@fluentui/react-icons` v 0.x, we are releasing a new set of icons under `@fluentui/react-icons` v 1.x. You can still use 0.x version for the old icons, but if you major bump to 1.x, you will be using the new icons. The Fabric MDL2 SVG Icon set that is released with v 0.x has been rereleased in `@fluentui/react-icons-mdl2`.)

Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft.

User story
---

`@fluentui/react-icons` are SVG based icons wrapped in a React element. Because each icon is its own element, you only need to import what you need for your application. 

There are different sizes of each icon, so you can choose what works best for your application.

There are also helpful interfaces that will allow you to add styling to fit the icons to your specific application, as well as add aria properties to increase the accessibility of the icons. 

User flows
---
In order to use these icons, simply import them as `import { [Componentname][size] } from @fluentui/react-icons` as follows:

```tsx
import { AccessTime24 } from "@fluentui/react-icons";   
```
You can also style the icons using the `IFluentIconsProps`interface and wrap the icon in a container using the `wrapIcon` method. You can then pass containter props like `aria-label` along with the regular `IFluentIconsProps`

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccessTime24, wrapIcon } from "@fluentui/react-icons";

const iconStyleProps: IFluentIconsProps = {
    primaryFill: "purple",
    className: "iconClass",
    filled: true
};
const WrappedAccessTime24Filled = wrapIcon(<AccessTime24 filled/>);
const rootElement = document.getElementById("root");
ReactDOM.render(
    <div>
        <AccessTime24Filled iconProps={...iconStyleProps}  />
        <WrappedAccessTime24Filled iconProps={...iconStyleProps} aria-label="AccessTime24"/>
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