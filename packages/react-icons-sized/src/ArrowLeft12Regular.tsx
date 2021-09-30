import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 6a.5.5 0 00-.5-.5H3.2l2.65-2.65a.5.5 0 10-.7-.7l-3.5 3.5a.5.5 0 000 .7l3.5 3.5a.5.5 0 00.7-.7L3.21 6.5H10a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowLeft12Regular = wrapIcon(rawSvg({}), 'ArrowLeft12Regular');
export default ArrowLeft12Regular;
      