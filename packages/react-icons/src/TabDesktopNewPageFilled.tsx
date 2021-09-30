import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3H8v2.5C8 6.33 8.67 7 9.5 7H17v7.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zM8 11a1 1 0 10-2 0 1 1 0 002 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M17 6v-.5A2.5 2.5 0 0014.5 3H9v2.5c0 .28.22.5.5.5H17z" fill={primaryFill} /></svg>;
}

const TabDesktopNewPageFilled = wrapIcon(rawSvg({}), 'TabDesktopNewPageFilled');
export default TabDesktopNewPageFilled;
      