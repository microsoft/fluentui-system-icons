/**
 * Stub module that replaces individual `.svg` sprite imports when
 * `injectSpritesInTemplates` is set to `{ mode: 'inline' }`.
 *
 * Because the `<symbol>` elements are embedded directly into the HTML `<body>`,
 * icon components only need a fragment reference (`#symbol-id`) — no external
 * URL is required. This module therefore exports an empty string.
 *
 * @see {@link file://./mergedSpriteUrlModule.ts} for the external-URL counterpart used in
 *   `merged` mode without inline injection.
 */
const url = '';

export default url;
