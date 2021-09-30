import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2A3.75 3.75 0 0011 9.43v2.07H7.75c-1.24 0-2.25 1-2.25 2.25v.83a3.75 3.75 0 101.5 0v-.83c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v.83a3.75 3.75 0 101.5 0v-.83c0-1.24-1-2.25-2.25-2.25H12.5V9.43A3.75 3.75 0 0011.75 2zM9.5 5.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM4 18.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM17.25 16a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" fill={primaryFill} /></svg>;
}

const Organization24Regular = wrapIcon(rawSvg({}), 'Organization24Regular');
export default Organization24Regular;
      