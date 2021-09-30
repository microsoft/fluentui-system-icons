import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3v3.69c0 .44-.12.88-.34 1.26L5.05 9h5.9l-.6-1.05A2.5 2.5 0 0110 6.69V3h.5a.5.5 0 000-1h-5a.5.5 0 000 1H6z" fill={primaryFill} /><path d="M11.54 10H4.46l-1.01 1.74A1.5 1.5 0 004.75 14h6.5a1.5 1.5 0 001.3-2.26L11.54 10z" fill={primaryFill} /></svg>;
}

const Beaker16Filled = wrapIcon(rawSvg({}), 'Beaker16Filled');
export default Beaker16Filled;
      