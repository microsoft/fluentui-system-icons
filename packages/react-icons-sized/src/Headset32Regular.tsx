import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12a10 10 0 0120 0v6a4 4 0 01-4 4h-2a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h4a8 8 0 10-16 0h4a2 2 0 012 2v6a2 2 0 01-2 2H8a4 4 0 004 4h1.17a3 3 0 110 2H12a6 6 0 01-6-6V12zm2 2v6h4v-6H8zm16 0h-4v6h2a2 2 0 002-2v-4zm-7 13a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const Headset32Regular = wrapIcon(rawSvg({}), 'Headset32Regular');
export default Headset32Regular;
      