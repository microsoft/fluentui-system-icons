import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 19a2 2 0 11-4 0 2 2 0 014 0zm0-4a2 2 0 100-4 2 2 0 000 4zm-12-3a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2v-2a1 1 0 011-1zm-8 4A10 10 0 0112 6h8a10 10 0 010 20h-8A10 10 0 012 16zm10-8a8 8 0 100 16h8a8 8 0 100-16h-8z" fill={primaryFill} /></svg>;
}

const Games32Regular = wrapIcon(rawSvg({}), 'Games32Regular');
export default Games32Regular;
      