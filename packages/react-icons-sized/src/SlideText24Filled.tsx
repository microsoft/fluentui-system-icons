import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM6.75 8a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM6 14.75c0 .41.34.75.75.75h6.5a.75.75 0 000-1.5h-6.5a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
}

const SlideText24Filled = wrapIcon(rawSvg({}), 'SlideText24Filled');
export default SlideText24Filled;
      