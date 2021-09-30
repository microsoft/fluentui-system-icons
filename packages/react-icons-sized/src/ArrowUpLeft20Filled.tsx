import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0V5.56l11.22 11.22a.75.75 0 001.06-1.06L5.56 4.5h5.69c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowUpLeft20Filled = wrapIcon(rawSvg({}), 'ArrowUpLeft20Filled');
export default ArrowUpLeft20Filled;
      