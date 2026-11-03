Each row shows one size two ways: the **resizable** `SendRegular` scaled to that `font-size`, next to the purpose-built **sized** variant (`Send16Regular` … `Send48Regular`) at its native size.

The sized variants are optically tuned per size, so at the extremes they differ from the resizable icon (which is the 20px artwork scaled). Font icons are sized with CSS `font-size` (a `className`/`style`, or an inherited `font-size`) — not the SVG-only `fontSize` prop.
