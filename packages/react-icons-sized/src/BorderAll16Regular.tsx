import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM4.5 3C3.67 3 3 3.67 3 4.5v3h4.5V3h-3zm4 0v4.5H13v-3c0-.83-.67-1.5-1.5-1.5h-3zM13 8.5H8.5V13h3c.83 0 1.5-.67 1.5-1.5v-3zM7.5 13V8.5H3v3c0 .83.67 1.5 1.5 1.5h3z" fill={primaryFill} /></svg>;
}

const BorderAll16Regular = wrapIcon(rawSvg({}), 'BorderAll16Regular');
export default BorderAll16Regular;
      