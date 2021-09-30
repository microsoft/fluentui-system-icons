import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.26 15.13c.06-.64.6-1.13 1.24-1.13h8.75a1.25 1.25 0 110 2.5h-7.62l-.48 4.82 2.9-.34a6.66 6.66 0 11.8 13.27h-.5a7.14 7.14 0 01-5.28-2.34l-.74-.82a1.25 1.25 0 111.84-1.68l.75.82a4.64 4.64 0 003.44 1.52h.48a4.16 4.16 0 10-.5-8.29L15.9 24a1.25 1.25 0 01-1.4-1.36l.76-7.5zm14.1 9.24a1.25 1.25 0 011.77 0L34 27.23l2.87-2.86a1.25 1.25 0 011.76 1.76L35.77 29l2.86 2.87a1.25 1.25 0 01-1.76 1.76L34 30.77l-2.87 2.86a1.25 1.25 0 01-1.76-1.76L32.23 29l-2.86-2.87a1.25 1.25 0 010-1.76zM10.26 34a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const Multiplier5X48Regular = wrapIcon(rawSvg({}), 'Multiplier5X48Regular');
export default Multiplier5X48Regular;
      