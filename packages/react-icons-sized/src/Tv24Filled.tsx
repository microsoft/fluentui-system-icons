import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v8.5A2.75 2.75 0 004.75 18h14.5A2.75 2.75 0 0022 15.25v-8.5A2.75 2.75 0 0019.25 4H4.75z" fill={primaryFill} /><path d="M5 20.25c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Tv24Filled = wrapIcon(rawSvg({}), 'Tv24Filled');
export default Tv24Filled;
      