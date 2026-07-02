import { AddFilled, AddCircleColor } from '@fluentui/react-icons';

// Under iconVariant: 'fonts' + headless, AddFilled stays on the headless font
// build while the SVG-only AddCircleColor reroutes to the headless svg atom.
console.log(AddFilled, AddCircleColor);
