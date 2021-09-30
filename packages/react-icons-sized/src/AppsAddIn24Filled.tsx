import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 3A2.5 2.5 0 0113 5.5V11h5.5a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5v-13A2.5 2.5 0 015.5 3h5zm.5 10H5v5.5c0 .28.22.5.5.5H11v-6zm7.5 0H13v6h5.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zm-8-8h-5a.5.5 0 00-.5.5V11h6V5.5a.5.5 0 00-.5-.5zm7.38-3H18a1 1 0 011 .88V5h2a1 1 0 011 .88V6a1 1 0 01-.88 1H19v2a1 1 0 01-.88 1H18a1 1 0 01-1-.88V7h-2a1 1 0 01-1-.88V6a1 1 0 01.88-1H17V3a1 1 0 01.88-1H18h-.12z" fill={primaryFill} /></svg>;
}

const AppsAddIn24Filled = wrapIcon(rawSvg({}), 'AppsAddIn24Filled');
export default AppsAddIn24Filled;
      