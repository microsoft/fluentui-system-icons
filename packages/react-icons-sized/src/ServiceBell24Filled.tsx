import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4a2 2 0 114 0v1.24a8.24 8.24 0 016.25 8c0 .42-.34.76-.75.76h-15a.75.75 0 01-.75-.75c0-3.86 2.67-7.1 6.25-8V4zm3.25 3.5a.75.75 0 000 1.5c1.25 0 2.14.62 2.89 1.68a.75.75 0 001.22-.86 4.87 4.87 0 00-4.11-2.32z" fill={primaryFill} /><path d="M2 17c0-1.1.9-2 2-2h16a2 2 0 110 4H4a2 2 0 01-2-2z" fill={primaryFill} /></svg>;
}

const ServiceBell24Filled = wrapIcon(rawSvg({}), 'ServiceBell24Filled');
export default ServiceBell24Filled;
      