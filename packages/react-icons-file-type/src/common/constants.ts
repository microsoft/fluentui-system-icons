/**
 * Base URL of the Microsoft Fluent CDN that hosts the file type icon assets.
 *
 * NOTE: this value is intentionally version-stamped by the CDN. It is provided as a
 * sensible, overridable default so consumers do not need to configure a CDN to get
 * started. To use your own asset host, supply a `baseUrl` to `FileTypeIconsProvider`
 * (or to the individual helper functions / the `baseUrl` prop on `FileTypeIcon`).
 */
export const FLUENT_CDN_BASE_URL = 'https://res.cdn.office.net/files/fabric-cdn-prod_20260710.001';

/**
 * Default base URL used to resolve file type icon assets when no `baseUrl` is provided.
 * Points at the `item-types` asset folder on the Fluent CDN.
 */
export const DEFAULT_BASE_URL = `${FLUENT_CDN_BASE_URL}/assets/item-types/`;

/** The set of pixel sizes for which file type icon assets are published. */
export const ICON_SIZES = [16, 20, 24, 32, 40, 48, 64, 96] as const;

/** The default icon size in pixels. */
export const DEFAULT_ICON_SIZE: FileTypeIconSize = 16;

/** Supported file type icon pixel sizes. */
export type FileTypeIconSize = (typeof ICON_SIZES)[number];

/** Supported image file formats for file type icon assets. */
export type ImageFileType = 'svg' | 'png';
