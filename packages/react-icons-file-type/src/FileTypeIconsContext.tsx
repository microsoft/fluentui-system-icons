import * as React from 'react';
import { DEFAULT_BASE_URL } from './constants';

// SSR-safe reference to the ambient window, used as the default when no explicit
// `targetWindow` is provided. `undefined` in non-DOM environments (e.g. during SSR).
// eslint-disable-next-line no-restricted-globals
const defaultTargetWindow: Window | undefined = typeof window !== 'undefined' ? window : undefined;

export interface FileTypeIconsContextValue {
  /**
   * Base URL used to resolve file type icon assets for all descendant `FileTypeIcon`
   * components. Defaults to the Fluent CDN so no configuration is required to get started.
   * Provide your own asset host to serve the icons from a different (e.g. same-origin) location.
   */
  baseUrl: string;
  /**
   * Window used to resolve the device pixel ratio when selecting the asset density.
   * Provide an explicit window to support multi-window scenarios (e.g. popped-out
   * surfaces). Falls back to the ambient `window`, or standard density (1x) during SSR.
   */
  targetWindow?: Window;
}

const FileTypeIconsContext = React.createContext<FileTypeIconsContextValue | undefined>(undefined);

export interface FileTypeIconsProviderProps {
  /**
   * Base URL used to resolve file type icon assets.
   * @default the Fluent CDN base url
   */
  baseUrl?: string;
  /**
   * Window used to resolve the device pixel ratio when selecting the asset density.
   * @default the ambient `window` (or undefined during SSR)
   */
  targetWindow?: Window;
  children?: React.ReactNode;
}

/**
 * Provides the `baseUrl` used by descendant `FileTypeIcon` components to resolve
 * their CDN-hosted assets. Omitting `baseUrl` falls back to the Fluent CDN, mirroring
 * the zero-configuration ergonomics of the legacy `initializeFileTypeIcons` default
 * without hardcoding the CDN inside the icon component itself.
 */
export const FileTypeIconsProvider: React.FC<FileTypeIconsProviderProps> = (props) => {
  const { baseUrl = DEFAULT_BASE_URL, targetWindow = defaultTargetWindow, children } = props;
  const value = React.useMemo<FileTypeIconsContextValue>(() => ({ baseUrl, targetWindow }), [baseUrl, targetWindow]);

  return <FileTypeIconsContext.Provider value={value}>{children}</FileTypeIconsContext.Provider>;
};

/**
 * Returns the current `FileTypeIcons` context value. When no provider is present, the
 * default Fluent CDN `baseUrl` is returned so icons render without explicit setup.
 */
export const useFileTypeIconsContext = (): FileTypeIconsContextValue => {
  const context = React.useContext(FileTypeIconsContext);
  return context ?? { baseUrl: DEFAULT_BASE_URL, targetWindow: defaultTargetWindow };
};
