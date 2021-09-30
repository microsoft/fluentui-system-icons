import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 9a7 7 0 0114 0c0 2.03-.67 4.24-1.85 5.96a6.58 6.58 0 01-4.4 2.99v.3c0 .41.34.75.75.75h3.25c1.24 0 2.25 1 2.25 2.25v1a.75.75 0 01-1.5 0v-1a.75.75 0 00-.75-.75H13.5c-1.24 0-2.25-1-2.25-2.25v-.3a6.58 6.58 0 01-4.4-3A10.88 10.88 0 015 9zm7.92-3.9a.75.75 0 00-.34 1.47 2.5 2.5 0 011.85 1.85.75.75 0 101.46-.35 4 4 0 00-2.97-2.96z" fill={primaryFill} /></svg>;
}

const Balloon24Filled = wrapIcon(rawSvg({}), 'Balloon24Filled');
export default Balloon24Filled;
      