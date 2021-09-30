import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M3 8a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M3 14a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1v-2a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M12 2a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1h-5z" fill={primaryFill} /><path d="M12 8a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1h-5z" fill={primaryFill} /></svg>;
}

const GridKanban20Filled = wrapIcon(rawSvg({}), 'GridKanban20Filled');
export default GridKanban20Filled;
      