import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.56 10.27l4.59 4.58a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l4.58 4.59-.08.15-2.8.94a.5.5 0 00-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 00.82-.2l.94-2.8.15-.08zm3.63-1.95l-1.79.96L6.72 4.6l.95-1.8a1.5 1.5 0 012.39-.34l3.48 3.5c.71.7.54 1.9-.35 2.37z" fill={primaryFill} /></svg>;
}

const PinOff16Filled = wrapIcon(rawSvg({}), 'PinOff16Filled');
export default PinOff16Filled;
      