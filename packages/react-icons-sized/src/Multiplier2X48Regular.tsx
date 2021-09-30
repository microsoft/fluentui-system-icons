import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.03 19.98c.68.12 1.32-.33 1.45-1l.01-.06.1-.27c.08-.23.24-.55.5-.87.47-.59 1.36-1.28 3.16-1.28 1.6 0 2.6.52 3.17 1.24.58.74.88 1.9.6 3.55a2.81 2.81 0 01-1.41 2.02c-.62.4-1.32.69-2.15 1.02l-1.06.44a9.48 9.48 0 00-3.68 2.5c-1.09 1.3-1.72 3.06-1.72 5.48A1.25 1.25 0 0013.25 34h10a1.25 1.25 0 100-2.5h-8.67a4.94 4.94 0 011.06-2.62c.66-.8 1.6-1.31 2.75-1.8.25-.12.53-.23.82-.35.9-.37 1.92-.78 2.75-1.31a5.3 5.3 0 002.52-3.7c.36-2.12.04-4.07-1.1-5.52-1.16-1.47-2.98-2.2-5.13-2.2-2.58 0-4.18 1.06-5.12 2.22a5.81 5.81 0 00-1.1 2.28v.02h-.01c0 .01-.04.13 0 .01-.12.68.33 1.33 1.01 1.45zm1.45-1zm0 0zm14.65 5.39a1.25 1.25 0 00-1.76 1.76L30.23 29l-2.86 2.87a1.25 1.25 0 001.76 1.76L32 30.77l2.87 2.86a1.25 1.25 0 001.76-1.76L33.77 29l2.86-2.87a1.25 1.25 0 00-1.76-1.76L32 27.23l-2.87-2.86z" fill={primaryFill} /></svg>;
}

const Multiplier2X48Regular = wrapIcon(rawSvg({}), 'Multiplier2X48Regular');
export default Multiplier2X48Regular;
      