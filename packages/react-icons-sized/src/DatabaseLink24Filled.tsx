import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4zm6.33.17c.59-.3 1.17-.67 1.67-1.12v4c-.24-.03-.5-.05-.75-.05h-3.5a4.75 4.75 0 00-2.26 8.93c-.48.05-.98.07-1.49.07-4.42 0-8-1.8-8-4V9.05c.5.45 1.08.83 1.67 1.12 1.7.85 3.94 1.33 6.33 1.33 2.4 0 4.63-.48 6.33-1.33zM23 17.75A3.75 3.75 0 0019.25 14h-.1a.75.75 0 00.1 1.5h.15a2.25 2.25 0 01-.15 4.5l-.1.01a.75.75 0 00.1 1.5v-.01h.2A3.75 3.75 0 0023 17.74zm-6.5-3a.75.75 0 00-.75-.75h-.2a3.75 3.75 0 00.2 7.5h.1a.75.75 0 00-.1-1.5h-.15a2.25 2.25 0 01.15-4.5h.1a.75.75 0 00.65-.75zm3.5 3a.75.75 0 00-.75-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const DatabaseLink24Filled = wrapIcon(rawSvg({}), 'DatabaseLink24Filled');
export default DatabaseLink24Filled;
      