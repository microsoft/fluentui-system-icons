import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 18a2 2 0 100-4 2 2 0 000 4zm-7-2a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10zM4 16a12 12 0 1124 0 12 12 0 01-24 0zM16 6a10 10 0 100 20 10 10 0 000-20z" fill={primaryFill} /></svg>;
}

const Target32Regular = wrapIcon(rawSvg({}), 'Target32Regular');
export default Target32Regular;
      