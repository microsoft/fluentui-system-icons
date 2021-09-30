import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.5A8.5 8.5 0 005.98 19a.75.75 0 01-1.06 1.06 10 10 0 1114.15 0 .75.75 0 01-1.05-1.05A8.5 8.5 0 0012 4.5z" fill={primaryFill} /><path d="M12 8a5 5 0 00-3.53 8.54.75.75 0 01-1.06 1.06 6.5 6.5 0 119.19 0 .75.75 0 01-1.07-1.06A5 5 0 0012 8z" fill={primaryFill} /><path d="M12 10.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM11 13a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /></svg>;
}

const Communication24Regular = wrapIcon(rawSvg({}), 'Communication24Regular');
export default Communication24Regular;
      