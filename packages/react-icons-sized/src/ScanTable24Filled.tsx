import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 15c.38 0 .7.28.74.65v3.6l.01.13c.06.59.53 1.06 1.12 1.12h3.73a.75.75 0 010 1.5H4.58A2.75 2.75 0 012 19.43V15.65a.75.75 0 01.75-.65zm18.5 0c.38 0 .7.28.74.65v3.6A2.75 2.75 0 0119.42 22h-3.66a.75.75 0 01-.1-1.5h3.6c.64 0 1.18-.49 1.24-1.12v-3.63c0-.41.34-.75.76-.75zM18 11v4a3 3 0 01-2.82 3H9a3 3 0 01-3-2.82V11h12zm-3-5a3 3 0 013 2.82V9.5H6V9a3 3 0 012.82-3H15zM8.25 2a.75.75 0 01.1 1.5h-3.6c-.65 0-1.18.5-1.25 1.12v3.63a.75.75 0 01-1.5.1v-3.6a2.75 2.75 0 012.58-2.74L4.75 2h3.5zm11 0h.16A2.75 2.75 0 0122 4.59v3.77a.75.75 0 01-1.49 0V4.62a1.25 1.25 0 00-1.13-1.11l-.12-.01h-3.6a.75.75 0 010-1.5h3.6z" fill={primaryFill} /></svg>;
}

const ScanTable24Filled = wrapIcon(rawSvg({}), 'ScanTable24Filled');
export default ScanTable24Filled;
      