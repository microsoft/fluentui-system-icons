import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v5.77a6.47 6.47 0 018 .8.8.8 0 010-.07v-6a.75.75 0 011.5 0V12h3.75a.75.75 0 010 1.5h-4.5l-.14-.01a6.47 6.47 0 01.37 7.51h5.77c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM7 18v2.5a.5.5 0 11-1 0V18H3.5a.5.5 0 110-1H6v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H7z" fill={primaryFill} /></svg>;
}

const ShiftsAdd24Filled = wrapIcon(rawSvg({}), 'ShiftsAdd24Filled');
export default ShiftsAdd24Filled;
      