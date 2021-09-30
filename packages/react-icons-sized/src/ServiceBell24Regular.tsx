import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 7.5a.75.75 0 000 1.5 4.4 4.4 0 013.4 1.76.75.75 0 101.24-.86 5.9 5.9 0 00-4.64-2.4z" fill={primaryFill} /><path d="M9.5 4.5a2.5 2.5 0 015 0v.88a8.25 8.25 0 015.75 7.87c0 .41-.34.75-.75.75h-15a.75.75 0 01-.75-.75c0-3.68 2.42-6.8 5.75-7.86V4.5zm3.5 0a1 1 0 10-2 0v.56a8.33 8.33 0 012 0V4.5zm-7.7 8h13.4a6.73 6.73 0 00-6.68-6 6.77 6.77 0 00-6.73 6z" fill={primaryFill} /><path d="M4 15a2 2 0 100 4h16a2 2 0 100-4H4zm-.5 2c0-.28.22-.5.5-.5h16a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const ServiceBell24Regular = wrapIcon(rawSvg({}), 'ServiceBell24Regular');
export default ServiceBell24Regular;
      