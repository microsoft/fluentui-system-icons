import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a6.5 6.5 0 00-6.48 6h-.27a4.75 4.75 0 100 9.5H13a7.5 7.5 0 0112.41-5.67A4.75 4.75 0 0020.75 10h-.27A6.5 6.5 0 0014 4zm13 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2.65-2.85a.5.5 0 00-.7 0L19 21.29l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const CloudCheckmark28Filled = wrapIcon(rawSvg({}), 'CloudCheckmark28Filled');
export default CloudCheckmark28Filled;
      