import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25zM8.5 8.75v6.5a.75.75 0 01-1.5 0v-5.1l-.33.22a.75.75 0 11-.84-1.24l1.5-1a.75.75 0 011.17.62zm9 0v6.5a.75.75 0 11-1.5 0v-5.1l-.33.22a.75.75 0 11-.84-1.24l1.5-1a.75.75 0 011.17.62zM13 14a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const RatioOneToOne24Filled = wrapIcon(rawSvg({}), 'RatioOneToOne24Filled');
export default RatioOneToOne24Filled;
      