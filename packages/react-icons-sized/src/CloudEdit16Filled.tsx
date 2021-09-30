import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2c-1.4 0-2.42.57-3.08 1.37a4.2 4.2 0 00-.9 2.15C1.98 5.73 1 7.32 1 8.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.8 1.05h2.46c.12-.17.25-.32.4-.47l4.28-4.28c.5-.5 1.15-.75 1.8-.75-.44-.25-.94-.41-1.45-.47a3.73 3.73 0 00-1.35-2.6A4.23 4.23 0 008 2zm6.54 5.45c-.6-.6-1.6-.6-2.2 0l-4.3 4.3c-.35.35-.6.8-.72 1.28l-.3 1.21a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29c.61-.6.61-1.6 0-2.2z" fill={primaryFill} /></svg>;
}

const CloudEdit16Filled = wrapIcon(rawSvg({}), 'CloudEdit16Filled');
export default CloudEdit16Filled;
      