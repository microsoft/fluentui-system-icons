import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6a10 10 0 000 20h8a10 10 0 000-20h-8zm10 13a2 2 0 11-4 0 2 2 0 014 0zm0-4a2 2 0 110-4 2 2 0 010 4zm-12-3a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2v-2a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const Games32Filled = wrapIcon(rawSvg({}), 'Games32Filled');
export default Games32Filled;
      