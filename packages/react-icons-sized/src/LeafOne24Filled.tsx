import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.04 3.05c.68-.45 1.6-.38 2.2.22l3.7 3.71a7 7 0 01-4.19 11.91v2.36a.75.75 0 11-1.5 0v-2.36A7 7 0 017.05 7l3.71-3.72c.09-.08.18-.16.28-.22zM12 11a.75.75 0 00-.75.75v5.63c.5.07 1 .07 1.5 0v-5.63A.75.75 0 0012 11z" fill={primaryFill} /></svg>;
}

const LeafOne24Filled = wrapIcon(rawSvg({}), 'LeafOne24Filled');
export default LeafOne24Filled;
      