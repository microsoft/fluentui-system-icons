import * as React from 'react';
import { DEFAULT_BASE_URL } from './constants';

export interface FileTypeIconsContextValue {
  /**
   * Base URL used to resolve file type icon assets for all descendant `FileTypeIcon`
   * components. Defaults to the Fluent CDN so no configuration is required to get started.
   * Provide your own asset host to serve the icons from a different (e.g. same-origin) location.
   */
  baseUrl: string;
}

const FileTypeIconsContext = React.createContext<FileTypeIconsContextValue | undefined>(undefined);

export interface FileTypeIconsProviderProps {
  /**
   * Base URL used to resolve file type icon assets.
   * @default the Fluent CDN base url
   */
  baseUrl?: string;
  children?: React.ReactNode;
}

/**
 * Provides the `baseUrl` used by descendant `FileTypeIcon` components to resolve
 * their CDN-hosted assets. Omitting `baseUrl` falls back to the Fluent CDN, mirroring
 * the zero-configuration ergonomics of the legacy `initializeFileTypeIcons` default
 * without hardcoding the CDN inside the icon component itself.
 */
export const FileTypeIconsProvider: React.FC<FileTypeIconsProviderProps> = (props) => {
  const { baseUrl = DEFAULT_BASE_URL, children } = props;
  const value = React.useMemo<FileTypeIconsContextValue>(() => ({ baseUrl }), [baseUrl]);

  return <FileTypeIconsContext.Provider value={value}>{children}</FileTypeIconsContext.Provider>;
};

/**
 * Returns the current `FileTypeIcons` context value. When no provider is present, the
 * default Fluent CDN `baseUrl` is returned so icons render without explicit setup.
 */
export const useFileTypeIconsContext = (): FileTypeIconsContextValue => {
  const context = React.useContext(FileTypeIconsContext);
  return context ?? { baseUrl: DEFAULT_BASE_URL };
};
