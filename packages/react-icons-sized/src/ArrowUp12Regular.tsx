import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10.5a.5.5 0 00.5-.5V3.2l2.65 2.65a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 10.7.7L5.5 3.21V10c0 .28.22.5.5.5z" fill={primaryFill} /></svg>;
}

const ArrowUp12Regular = wrapIcon(rawSvg({}), 'ArrowUp12Regular');
export default ArrowUp12Regular;
      