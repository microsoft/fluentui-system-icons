import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 6a.75.75 0 00-.75-.75H3.81l1.97-1.97a.75.75 0 00-1.06-1.06L1.47 5.47c-.3.3-.3.77 0 1.06l3.25 3.25a.75.75 0 001.06-1.06L3.81 6.75h5.94c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowLeft12Filled = wrapIcon(rawSvg({}), 'ArrowLeft12Filled');
export default ArrowLeft12Filled;
      