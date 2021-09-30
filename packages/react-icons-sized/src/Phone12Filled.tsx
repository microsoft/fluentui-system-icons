import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.5C3 1.67 3.67 1 4.5 1h3C8.33 1 9 1.67 9 2.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 013 9.5v-7zM5.5 8a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /></svg>;
}

const Phone12Filled = wrapIcon(rawSvg({}), 'Phone12Filled');
export default Phone12Filled;
      