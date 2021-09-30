import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.5 8a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M4.06 3.5H4v-1C4 1.67 4.67 1 5.5 1h1C7.33 1 8 1.67 8 2.5v1h-.06A4 4 0 0110 7v2.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 012 9.5V7a4 4 0 012.06-3.5zm.94-1v.63a4 4 0 012 0V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5zM3 7v2.5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5V7a3 3 0 00-6 0z" fill={primaryFill} /></svg>;
}

const Backpack12Regular = wrapIcon(rawSvg({}), 'Backpack12Regular');
export default Backpack12Regular;
      