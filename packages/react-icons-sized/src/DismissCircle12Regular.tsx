import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.85 4.15c.2.2.2.5 0 .7L6.71 6l1.14 1.15a.5.5 0 11-.7.7L6 6.71 4.85 7.85a.5.5 0 11-.7-.7L5.29 6 4.15 4.85a.5.5 0 11.7-.7L6 5.29l1.15-1.14c.2-.2.5-.2.7 0zM6 1a5 5 0 100 10A5 5 0 006 1zM2 6a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
}

const DismissCircle12Regular = wrapIcon(rawSvg({}), 'DismissCircle12Regular');
export default DismissCircle12Regular;
      