import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 12a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M14 12a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M18 14a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const MoreHorizontal24Filled = wrapIcon(rawSvg({}), 'MoreHorizontal24Filled');
export default MoreHorizontal24Filled;
      