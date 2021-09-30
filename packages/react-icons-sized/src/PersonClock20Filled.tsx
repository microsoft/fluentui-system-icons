import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /><path d="M2 13a2 2 0 012-2h6.26a5.48 5.48 0 00-.05 6.94c-.4.04-.8.06-1.21.06a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 012 13z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const PersonClock20Filled = wrapIcon(rawSvg({}), 'PersonClock20Filled');
export default PersonClock20Filled;
      