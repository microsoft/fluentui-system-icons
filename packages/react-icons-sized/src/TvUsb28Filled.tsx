import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v10.5C2 19.55 3.46 21 5.25 21h12.26l-.01-.26v-4.17c0-.82.4-1.54 1-2V13a2.5 2.5 0 012.5-2.5h4c.35 0 .7.07 1 .2V7.26C26 5.45 24.54 4 22.75 4H5.25zm1.5 19H18.4l.6 1.06v.44H6.75a.75.75 0 010-1.5zm13.75.67V26a1 1 0 001 1h3a1 1 0 001-1v-2.33l1.37-2.44a1 1 0 00.13-.5v-4.16a1 1 0 00-1-1V13v-.08a1 1 0 00-1-.92h-4a1 1 0 00-1 1v2.57a1 1 0 00-1 1v4.17a1 1 0 00.13.49l1.37 2.44zm1-10.17h3v2.07h-3V13.5z" fill={primaryFill} /></svg>;
}

const TvUsb28Filled = wrapIcon(rawSvg({}), 'TvUsb28Filled');
export default TvUsb28Filled;
      