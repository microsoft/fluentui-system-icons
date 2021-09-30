import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.85 5.15c.2.2.2.5 0 .7L2.71 7H6.5a.5.5 0 010 1H2.7l1.15 1.15a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0zm8.3 0c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L13.29 8H9.5a.5.5 0 010-1h3.8l-1.15-1.15a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const ArrowFit16Regular = wrapIcon(rawSvg({}), 'ArrowFit16Regular');
export default ArrowFit16Regular;
      