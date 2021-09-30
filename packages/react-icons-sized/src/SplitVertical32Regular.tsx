import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 29a1 1 0 102 0V3a1 1 0 10-2 0v26zm11.5-5h-8v2h8a3.5 3.5 0 003.5-3.5v-13A3.5 3.5 0 0026.5 6h-8v2h8c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5zm-13-18h-8A3.5 3.5 0 002 9.5v13A3.5 3.5 0 005.5 26h8v-2h-8A1.5 1.5 0 014 22.5v-13C4 8.67 4.67 8 5.5 8h8V6z" fill={primaryFill} /></svg>;
}

const SplitVertical32Regular = wrapIcon(rawSvg({}), 'SplitVertical32Regular');
export default SplitVertical32Regular;
      