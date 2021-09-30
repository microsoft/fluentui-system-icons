import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm2.5 5.5h-5a.5.5 0 000 1h5a.5.5 0 100-1z" fill={primaryFill} /></svg>;
}

const Block16Filled = wrapIcon(rawSvg({}), 'Block16Filled');
export default Block16Filled;
      