import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm7 .5a.5.5 0 00-1 0v4c0 .28.22.5.5.5h3a.5.5 0 000-1H10V6.5z" fill={primaryFill} /></svg>;
}

const Shifts20Filled = wrapIcon(rawSvg({}), 'Shifts20Filled');
export default Shifts20Filled;
      