import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 9.74A5.5 5.5 0 016.26 2H3.5C2.67 2 2 2.67 2 3.5v7c0 .83.67 1.5 1.5 1.5H6v1H4.5a.5.5 0 000 1h7a.5.5 0 100-1H10v-1h2.5c.83 0 1.5-.67 1.5-1.5v-.76zM9 13H7v-1h2v1zm1.5-3a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM12 3v.15a3 3 0 00-3.62.48.5.5 0 00.7.7A2 2 0 0111.48 4H11a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V3a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7A2 2 0 019.52 7H10a.5.5 0 000-1H8.5a.5.5 0 00-.5.5V8a.5.5 0 001 0v-.15a3 3 0 001.45.4z" fill={primaryFill} /></svg>;
}

const DesktopSync16Filled = wrapIcon(rawSvg({}), 'DesktopSync16Filled');
export default DesktopSync16Filled;
      