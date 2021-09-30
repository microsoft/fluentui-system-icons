import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.15 2.15c.2-.2.5-.2.7 0l3 3a.5.5 0 01-.7.7L8 3.71v9.79a.5.5 0 01-1 0V3.7L4.85 5.86a.5.5 0 11-.7-.7l3-3z" fill={primaryFill} /></svg>;
}

const ArrowSortUp16Regular = wrapIcon(rawSvg({}), 'ArrowSortUp16Regular');
export default ArrowSortUp16Regular;
      