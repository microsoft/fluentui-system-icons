import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.85 5.85a.5.5 0 11-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 01-.7.7L8 3.71v8.58l2.15-2.14a.5.5 0 01.7.7l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 01.7-.7L7 12.29V3.71L4.85 5.85z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown16Regular = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown16Regular');
export default ArrowBidirectionalUpDown16Regular;
      