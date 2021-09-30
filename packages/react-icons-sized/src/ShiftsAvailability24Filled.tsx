import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2a6.5 6.5 0 00-.48 12.98 7.5 7.5 0 016.96-6.96A6.5 6.5 0 008.5 2zm2.78 5.78l-3 3a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 011.06-1.06l.97.97 2.47-2.47a.75.75 0 011.06 1.06z" fill={primaryFill} /><path d="M9 15.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zm4.22-2.26c-.3.3-.3.77 0 1.06l1.22 1.2-1.22 1.22a.75.75 0 101.06 1.06l1.22-1.22 1.21 1.22a.75.75 0 001.07-1.06l-1.22-1.22 1.21-1.2a.75.75 0 00-1.05-1.07l-1.22 1.21-1.22-1.2a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
}

const ShiftsAvailability24Filled = wrapIcon(rawSvg({}), 'ShiftsAvailability24Filled');
export default ShiftsAvailability24Filled;
      