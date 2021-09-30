import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v4.1a5.5 5.5 0 017.4 7.4h4.1a2.5 2.5 0 002.5-2.5V7H9.5A1.5 1.5 0 018 5.5V3H5.5z" fill={primaryFill} /><path d="M9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0014.5 3H9z" fill={primaryFill} /><path d="M5.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1a.5.5 0 010 1H5.5a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const TabDesktopClockFilled = wrapIcon(rawSvg({}), 'TabDesktopClockFilled');
export default TabDesktopClockFilled;
      