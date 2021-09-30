import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.35 7.35a.5.5 0 11-.7-.7l3.5-3.5c.2-.2.5-.2.7 0l3.5 3.5a.5.5 0 01-.7.7L10 4.71v10.58l2.65-2.64a.5.5 0 01.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 01.7-.7L9 15.29V4.71L6.35 7.35z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown20Regular = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown20Regular');
export default ArrowBidirectionalUpDown20Regular;
      