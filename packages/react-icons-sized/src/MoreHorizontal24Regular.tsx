import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 12a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z" fill={primaryFill} /><path d="M13.75 12a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z" fill={primaryFill} /><path d="M18 13.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" fill={primaryFill} /></svg>;
}

const MoreHorizontal24Regular = wrapIcon(rawSvg({}), 'MoreHorizontal24Regular');
export default MoreHorizontal24Regular;
      