`bundleIcon()` is used to combine the `Regular` and `Filled` versions of icons into a single compound component. The bundled icon accepts a `filled` prop (boolean) to control which variant is displayed: when `filled={true}`, the filled variant is shown; when `filled={false}` or omitted, the regular variant is shown.

You can also use the `iconFilledClassName` and `iconRegularClassName` class names to style the compound component, for example to toggle between variants on hover.

Some Fluent UI React components have "fill-on-hover" behavior built-in, for example `Button` & `MenuItem`.
