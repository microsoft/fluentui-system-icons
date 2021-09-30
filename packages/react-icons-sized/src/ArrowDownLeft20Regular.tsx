import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 16a.5.5 0 010 1h-8a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v6.8L16.15 3.14a.5.5 0 11.7.7L4.71 16h6.79z" fill={primaryFill} /></svg>;
}

const ArrowDownLeft20Regular = wrapIcon(rawSvg({}), 'ArrowDownLeft20Regular');
export default ArrowDownLeft20Regular;
      