import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v5.77a6.47 6.47 0 018 .8.8.8 0 010-.07v-6a.75.75 0 011.5 0V12h3.75a.75.75 0 010 1.5h-4.5l-.14-.01a6.47 6.47 0 01.37 7.51h5.77c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.25 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69z" fill={primaryFill} /></svg>;
}

const ShiftsProhibited24Filled = wrapIcon(rawSvg({}), 'ShiftsProhibited24Filled');
export default ShiftsProhibited24Filled;
      