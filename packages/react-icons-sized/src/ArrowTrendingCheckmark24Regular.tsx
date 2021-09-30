import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 3c.41 0 .75.34.75.75v5a.75.75 0 01-1.5 0V5.56l-5.97 5.97c-.3.3-.77.3-1.06 0l-2.22-2.22-5.97 5.97a.75.75 0 01-1.06-1.06l6.5-6.5c.3-.3.77-.3 1.06 0L13 9.94l5.44-5.44h-3.19a.75.75 0 010-1.5h5zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ArrowTrendingCheckmark24Regular = wrapIcon(rawSvg({}), 'ArrowTrendingCheckmark24Regular');
export default ArrowTrendingCheckmark24Regular;
      