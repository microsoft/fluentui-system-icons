import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.2 5.75c.27.31.75.33 1.05.05l2.25-2.04 2.25 2.04a.75.75 0 001-1.1L19 2.2a.75.75 0 00-1 0l-2.75 2.5a.75.75 0 00-.05 1.05zM12 4c.3 0 .58.19.7.47l5.75 14.5a.75.75 0 01-1.4.56L15.25 15h-6.5l-1.8 4.53a.75.75 0 11-1.4-.56l5.75-14.5A.75.75 0 0112 4zm-2.66 9.5h5.32L12 6.78 9.34 13.5z" fill={primaryFill} /></svg>;
}

const FontIncrease24Regular = wrapIcon(rawSvg({}), 'FontIncrease24Regular');
export default FontIncrease24Regular;
      