import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.86A1 1 0 014.5 2l5.49 3.14a1 1 0 010 1.74L4.49 10A1 1 0 013 9.14V2.86zM9.5 6L4 2.86v6.28L9.5 6z" fill={primaryFill} /></svg>;
}

const Play12Regular = wrapIcon(rawSvg({}), 'Play12Regular');
export default Play12Regular;
      