import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 2.25c.41 0 .75.34.75.75v4.3c.34-.2.7-.3 1.1-.3 1.44 0 2.6 1.4 2.6 3.13 0 1.72-1.16 3.12-2.6 3.12-.43 0-.85-.13-1.21-.36A.75.75 0 019 12.5V3c0-.41.34-.75.75-.75zm1.85 9.5c.37 0 1.1-.46 1.1-1.63 0-1.16-.73-1.62-1.1-1.62-.36 0-1.1.46-1.1 1.63 0 1.16.74 1.62 1.1 1.62zM7.13 8.87v3.8c-.04.09-.13.26-.2.32a.62.62 0 01-.35.17H6.5a.63.63 0 01-.61-.49c-.6.33-1.18.5-1.72.5-1.3 0-2.3-.92-2.3-2.3 0-.6.21-1.13.6-1.54.39-.4.94-.66 1.62-.74a5.1 5.1 0 011.78.1.9.9 0 00-.25-.58c-.16-.16-.42-.26-.82-.28-.63-.03-1.05.06-1.28.22a.63.63 0 01-.71-1.02 3.1 3.1 0 011.86-.45h.2c.67.04 1.22.25 1.61.62.4.38.61.9.64 1.53v.14zM3.38 10.2a.94.94 0 00-.27.7c0 .34.11.6.3.77.17.17.43.27.75.27.41 0 .95-.2 1.6-.62l.1-.08v-1.23l-.1-.03a3.91 3.91 0 00-1.53-.13c-.4.05-.67.18-.85.35z" fill={primaryFill} /></svg>;
}

const TextCaseLowercase16Filled = wrapIcon(rawSvg({}), 'TextCaseLowercase16Filled');
export default TextCaseLowercase16Filled;
      