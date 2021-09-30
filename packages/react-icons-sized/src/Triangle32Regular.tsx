import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.15 4.68a3.25 3.25 0 015.7 0l10.74 19.5A3.25 3.25 0 0126.74 29H5.25a3.25 3.25 0 01-2.85-4.82l10.75-19.5zm3.94.97a1.25 1.25 0 00-2.19 0L4.16 25.15C3.7 25.98 4.3 27 5.25 27h21.5c.94 0 1.55-1.02 1.09-1.85L17.09 5.65z" fill={primaryFill} /></svg>;
}

const Triangle32Regular = wrapIcon(rawSvg({}), 'Triangle32Regular');
export default Triangle32Regular;
      