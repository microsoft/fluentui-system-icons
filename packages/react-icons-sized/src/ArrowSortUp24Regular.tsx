import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.72 8.71l4.5-4.49a.75.75 0 01.97-.07l.08.07 4.5 4.5a.75.75 0 01-.97 1.13l-.08-.07-3.22-3.22v12.7c0 .37-.28.69-.65.74h-.1a.75.75 0 01-.75-.64V6.56L7.78 9.78a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.09 4.5-4.49-4.5 4.5z" fill={primaryFill} /></svg>;
}

const ArrowSortUp24Regular = wrapIcon(rawSvg({}), 'ArrowSortUp24Regular');
export default ArrowSortUp24Regular;
      