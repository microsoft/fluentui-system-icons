import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.3 3.53a5.07 5.07 0 017.17 7.17l-9.77 9.77a5.07 5.07 0 01-7.17-7.17l9.77-9.77zm6.11 1.06a3.57 3.57 0 00-5.05 0l-4.35 4.35L15.06 14l4.35-4.35a3.57 3.57 0 000-5.05zm-8.6 13.69a.75.75 0 00-1.06-1.06L8.3 18.66a1.5 1.5 0 01-2.1.02l-.02-.02a.75.75 0 10-1.04 1.08l.02.02a3 3 0 004.2-.04l1.44-1.44z" fill={primaryFill} /></svg>;
}

const Pill24Filled = wrapIcon(rawSvg({}), 'Pill24Filled');
export default Pill24Filled;
      