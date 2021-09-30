import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3c0-1.1.9-2 2-2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm3 6a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const Door16Filled = wrapIcon(rawSvg({}), 'Door16Filled');
export default Door16Filled;
      