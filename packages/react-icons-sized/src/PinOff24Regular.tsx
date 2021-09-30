import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l5.9 5.9-3.3 1.15a1.25 1.25 0 00-.49 2.07l3.1 3.1L3 19.94V21h1.06l4.44-4.44 3.1 3.1c.66.66 1.77.4 2.07-.47l1.14-3.31 5.91 5.9a.75.75 0 001.06-1.06L3.28 2.22zM13.64 14.7l-1.26 3.62-6.7-6.7 3.62-1.26 4.34 4.34zm6.04-3.88l-3.78 1.9L17 13.82l3.34-1.67a2.75 2.75 0 00.72-4.4l-4.83-4.83a2.75 2.75 0 00-4.4.72l-1.67 3.34 1.12 1.11 1.89-3.78c.38-.77 1.4-.93 2-.33l4.83 4.83c.6.6.44 1.62-.33 2z" fill={primaryFill} /></svg>;
}

const PinOff24Regular = wrapIcon(rawSvg({}), 'PinOff24Regular');
export default PinOff24Regular;
      