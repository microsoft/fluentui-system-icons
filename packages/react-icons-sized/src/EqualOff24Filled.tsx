import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L6.94 8H4a1 1 0 000 2h4.94l4 4H4a1 1 0 100 2h10.94l5.78 5.78a.75.75 0 001.06-1.06L3.28 2.22zM20 14h-2.82l2 2H20a1 1 0 100-2zm-8.82-6l2 2H20a1 1 0 100-2h-8.82z" fill={primaryFill} /></svg>;
}

const EqualOff24Filled = wrapIcon(rawSvg({}), 'EqualOff24Filled');
export default EqualOff24Filled;
      