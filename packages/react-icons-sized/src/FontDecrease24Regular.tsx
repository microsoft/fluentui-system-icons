import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 2.2a.75.75 0 00-1 1.1L18 5.8c.28.26.72.26 1 0l2.75-2.5a.75.75 0 10-1-1.1L18.5 4.24 16.25 2.2zM12 4c.3 0 .58.19.7.47l5.75 14.5a.75.75 0 01-1.4.56L15.25 15h-6.5l-1.8 4.53a.75.75 0 11-1.4-.56l5.75-14.5A.75.75 0 0112 4zm0 2.78L9.34 13.5h5.32L12 6.78z" fill={primaryFill} /></svg>;
}

const FontDecrease24Regular = wrapIcon(rawSvg({}), 'FontDecrease24Regular');
export default FontDecrease24Regular;
      