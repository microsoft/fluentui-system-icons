import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1.5a.5.5 0 00-1 0V5H1.5a.5.5 0 000 1H5v3.5a.5.5 0 001 0V6h3.5a.5.5 0 000-1H6V1.5z" fill={primaryFill} /></svg>;
}

const Add12Regular = wrapIcon(rawSvg({}), 'Add12Regular');
export default Add12Regular;
      