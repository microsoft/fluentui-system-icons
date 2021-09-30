import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 17.5c0-1.29.37-2.49 1.02-3.5H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.93 0 1.8-.08 2.6-.24A6.47 6.47 0 0111 17.5z" fill={primaryFill} /><path d="M10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.65-2.85a.5.5 0 00-.7.7L19.29 17H15a.5.5 0 100 1h4.3l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 00.15-.34v-.01a.5.5 0 00-.15-.36l-2.5-2.5z" fill={primaryFill} /></svg>;
}

const PersonArrowRight24Filled = wrapIcon(rawSvg({}), 'PersonArrowRight24Filled');
export default PersonArrowRight24Filled;
      