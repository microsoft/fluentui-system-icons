import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.8 12.65l-2.65 2.64V3.5a.5.5 0 10-1 0v11.8L6.5 12.64a.5.5 0 10-.7.7l3.48 3.5h.01a.5.5 0 00.36.15.5.5 0 00.38-.18l3.47-3.47a.5.5 0 10-.7-.7z" fill={primaryFill} /></svg>;
}

const ArrowSortDown20Regular = wrapIcon(rawSvg({}), 'ArrowSortDown20Regular');
export default ArrowSortDown20Regular;
      