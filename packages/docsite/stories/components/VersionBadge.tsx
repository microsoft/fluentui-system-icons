import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export interface VersionBadgeProps {
  /** The npm package name, e.g. `@fluentui/react-icons`. */
  packageName: string;
  /** The package version, e.g. `2.0.331`. */
  version: string;
}

/**
 * A small pill showing a package name and its version.
 *
 * Styling lives in `.storybook/docs-root-v9.css` (`.fluent-version-badge`) rather than
 * Griffel because this badge is serialized to an HTML string and injected into a
 * Storybook docs `description` — so it renders as static markup (via markdown-to-jsx),
 * not as a live React component. The docs page is wrapped in a `FluentProvider`
 * (`webLightTheme`) by `@fluentui/react-storybook-addon`, so the `var(--color…)` Fluent
 * tokens referenced by that CSS class resolve on the page.
 */
export const VersionBadge: React.FC<VersionBadgeProps> = ({ packageName, version }) => (
  <span className="fluent-version-badge">
    <span className="fluent-version-badge__name">{packageName}</span>
    <span>v{version}</span>
  </span>
);

/**
 * Serializes {@link VersionBadge} to static HTML so it can be embedded into a
 * Storybook docs `description` (which accepts a markdown/HTML string, not React).
 */
export const versionBadgeMarkup = (props: VersionBadgeProps): string =>
  renderToStaticMarkup(<VersionBadge {...props} />);
