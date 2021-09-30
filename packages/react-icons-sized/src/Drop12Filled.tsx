import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a.5.5 0 01.35.15c.26.25 1.04 1.03 1.75 2.07A6.99 6.99 0 019.5 7c0 1.34-.36 2.35-1.02 3.03-.66.69-1.55.97-2.48.97-.93 0-1.82-.28-2.48-.97C2.86 9.35 2.5 8.33 2.5 7c0-1.4.7-2.76 1.4-3.78a14.9 14.9 0 011.75-2.07A.5.5 0 016 1z" fill={primaryFill} /></svg>;
}

const Drop12Filled = wrapIcon(rawSvg({}), 'Drop12Filled');
export default Drop12Filled;
      