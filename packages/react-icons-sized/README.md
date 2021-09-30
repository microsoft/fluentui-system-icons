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

Finally, you can bundle the `Filled` and `Regular` versions of each icon using the `bundleIcon` method. The `bundleIcon` function returns a component with both states of the icon, and provides default styling for `hover`, `active`, and `focus` states. You can then use the same props as the regular unbundled icons.

If you would like to get the bundled icon without any of the default styling, then add the `filled` prop to the new component and the icon will not have any default styling. To style this new icon, simply add your own user defined stylesheet to the icon.



```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccessTime24Filled } from "@fluentui/react-icons-sized/lib/AccessTime24Filled";
import { AccessTime24Regular } from "@fluentui/react-icons-sized/lib/AccessTime24Regular";
import { bundleIcon } from "@fluentui/react-icons-sized/lib/utils/bundleIcon";


const iconStyleProps: IFluentIconsProps = {
    primaryFill: "purple",
    className: "iconClass"
};
const AccessTime24 = bundleIcon(AccessTime24Filled, AccessTime24Regular)
const rootElement = document.getElementById("root");
ReactDOM.render(
    <div>
        <AccessTime24Filled aria-label="AccessTime24Filled" {...iconStyleProps}  />
        <AccessTime24Regular aria-label="AccessTime24Regular" {...iconStyleProps} />
        <AccessTime24 />
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