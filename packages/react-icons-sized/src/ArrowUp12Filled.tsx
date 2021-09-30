import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10.5c.41 0 .75-.34.75-.75V3.81l1.97 1.97a.75.75 0 001.06-1.06L6.53 1.47a.75.75 0 00-1.06 0L2.22 4.72a.75.75 0 101.06 1.06l1.97-1.97v5.94c0 .41.34.75.75.75z" fill={primaryFill} /></svg>;
}

const ArrowUp12Filled = wrapIcon(rawSvg({}), 'ArrowUp12Filled');
export default ArrowUp12Filled;
      