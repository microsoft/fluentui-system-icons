import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l5.9 5.9-3.3 1.15a1.25 1.25 0 00-.49 2.07l3.1 3.1L3 19.94V21h1.06l4.44-4.44 3.1 3.1c.66.66 1.77.4 2.07-.47l1.14-3.31 5.91 5.9a.75.75 0 001.06-1.06L3.28 2.22zm17.07 9.94l-3.34 1.67L10.17 7l1.67-3.34a2.75 2.75 0 014.4-.72l4.83 4.83a2.75 2.75 0 01-.72 4.4z" fill={primaryFill} /></svg>;
}

const PinOff24Filled = wrapIcon(rawSvg({}), 'PinOff24Filled');
export default PinOff24Filled;
      