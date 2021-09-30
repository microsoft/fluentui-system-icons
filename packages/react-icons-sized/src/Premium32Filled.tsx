import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 4c-.48 0-.92.27-1.13.7l-3.75 7.76c-.2.43-.15.95.16 1.33l12.75 15.75a1.25 1.25 0 001.94 0l12.75-15.75c.3-.38.37-.9.16-1.33L26.13 4.7C25.92 4.27 25.48 4 25 4H7zm-1.64 7.5l2.42-5h3.7l-1.57 5H5.36zm.3 2.5h4.1l2.87 8.6L5.67 14zm6.74 0h7.2L16 24.8 12.4 14zm9.83 0h4.1l-6.96 8.6 2.86-8.6zm4.4-2.5H22.1l-1.56-5h3.69l2.42 5zm-7.16 0h-6.94l1.56-5h3.82l1.56 5z" fill={primaryFill} /></svg>;
}

const Premium32Filled = wrapIcon(rawSvg({}), 'Premium32Filled');
export default Premium32Filled;
      