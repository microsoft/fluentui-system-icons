import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 2.75a.75.75 0 00-1.5 0V3H5.25A3.25 3.25 0 002 6.25v12.5C2 20.55 3.46 22 5.25 22H8.6l-2.4 2.76a.75.75 0 101.12.98L10.6 22h5.4a2.5 2.5 0 012.5-2.5h.96A3.74 3.74 0 0122 13a3.75 3.75 0 013.67 3H26V6.25C26 4.45 24.55 3 22.75 3H15v-.25zm-9 5.5c0-.41.33-.75.75-.75h5.5a.75.75 0 110 1.5h-5.5A.75.75 0 016 8.25zm.75 3.25h10.5a.75.75 0 110 1.5H6.75a.75.75 0 110-1.5zM6 16.25c0-.41.33-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zM24.65 16a2.75 2.75 0 10-5.3 1.5 2.75 2.75 0 005.3-1.5zm-6.15 4.5c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4V22c0-.83-.67-1.5-1.5-1.5h-7z" fill={primaryFill} /></svg>;
}

const ChartPerson28Filled = wrapIcon(rawSvg({}), 'ChartPerson28Filled');
export default ChartPerson28Filled;
      