import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7L18.21 7.5l1.64-1.65a.5.5 0 00-.7-.7L17.5 6.79l-1.65-1.64zm-2.5 7.35a6.54 6.54 0 01-1.33-1.5H7.5a.75.75 0 000 1.5h5.85zM11 7.5c0-.52.06-1.02.17-1.5H4.5a.75.75 0 000 1.5H11zm2.5 8.5a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h3z" fill={primaryFill} /></svg>;
}

const FilterDismiss24Regular = wrapIcon(rawSvg({}), 'FilterDismiss24Regular');
export default FilterDismiss24Regular;
      