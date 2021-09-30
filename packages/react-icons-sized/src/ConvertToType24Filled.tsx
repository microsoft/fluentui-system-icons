import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4C4.67 4 4 4.67 4 5.5V8a1 1 0 01-2 0V5.5A3.5 3.5 0 015.5 2H8a1 1 0 010 2H5.5zm0 16A1.5 1.5 0 014 18.5V16a1 1 0 10-2 0v2.5A3.5 3.5 0 005.5 22H8a1 1 0 100-2H5.5zM20 5.5c0-.83-.67-1.5-1.5-1.5H16a1 1 0 110-2h2.5A3.5 3.5 0 0122 5.5V8a1 1 0 11-2 0V5.5zM18.5 20c.83 0 1.5-.67 1.5-1.5V16a1 1 0 112 0v2.5a3.5 3.5 0 01-3.5 3.5H16a1 1 0 110-2h2.5zM7.75 6a1 1 0 00-1 1v1.5a1 1 0 002 0V8H11v8H9.75a1 1 0 100 2h4.5a1 1 0 100-2H13V8h2.25v.5a1 1 0 102 0V7a1 1 0 00-1-1h-8.5z" fill={primaryFill} /></svg>;
}

const ConvertToType24Filled = wrapIcon(rawSvg({}), 'ConvertToType24Filled');
export default ConvertToType24Filled;
      