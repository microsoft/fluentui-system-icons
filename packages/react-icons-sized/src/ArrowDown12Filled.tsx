import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1.5c.41 0 .75.34.75.75v5.94l1.97-1.97a.75.75 0 011.06 1.06l-3.25 3.25c-.3.3-.77.3-1.06 0L2.22 7.28a.75.75 0 011.06-1.06l1.97 1.97V2.25c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowDown12Filled = wrapIcon(rawSvg({}), 'ArrowDown12Filled');
export default ArrowDown12Filled;
      