@fluentui/react-native-icons
===

Fluent System Icons are a collection of familiar, friendly, and modern icons from Microsoft.

User story
---

`@fluentui/react-native-icons` are SVG based icons wrapped in a React Native element. Because each icon is its own element, you only need to import what you need for your application. 

There are two different states of each icon, `Filled` and `Regular`, so you can choose what works best for your application. These are by default sized to `1em`, and can be scaled up or down to suit your developer needs.

Unlike the react-icons package, styling support isn't yet available due to limited styling capabilities of RNSVG.

User flows
---
In order to use these icons, simply import them as `import { [Componentname][state] } from @fluentui/react-native-icons` as follows: 

```tsx
import { AccessTimeFilled } from "@fluentui/react-native-icons";
```

The previous icon offerings are scalable, but if you know what size you want to use for your icons, and you are not planning on using multiple sizes, it is recommended to use the sized icons. These are the same icons as the general case, but in multiple different sizes, built to look pixel perfect at those specific sizes.
You can import the sized icons in a similar way:

```tsx
import { AccessTime24Filled } from "@fluentui/react-native-icons";
```

```tsx
import {
  AccessTime20Filled,
} from '@fluentui/react-native-icons';

const FluentIconsTest: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'row' }}>
          <AccessTime20Filled />
        </View>
      </View>
    </React.Fragment>
  );
};
```

###### tags: `Templates` `Documentation`