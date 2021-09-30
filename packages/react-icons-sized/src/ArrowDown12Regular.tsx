import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1.5c.28 0 .5.22.5.5v6.8l2.65-2.65a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 11.7-.7L5.5 8.79V2c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowDown12Regular = wrapIcon(rawSvg({}), 'ArrowDown12Regular');
export default ArrowDown12Regular;
      