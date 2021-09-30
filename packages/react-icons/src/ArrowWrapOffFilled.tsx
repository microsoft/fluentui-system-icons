import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l.98.98A.75.75 0 003.75 5h.54l3.5 3.5H6.25a3.25 3.25 0 100 6.5h8.04l.71.7a.75.75 0 00.8.8l1.35 1.35a.5.5 0 00.7-.7l-15-15zM12.8 13.5H6.25a1.75 1.75 0 110-3.5h3.04l3.5 3.5zm.96-5h-3.13l1.5 1.5h1.63a3.25 3.25 0 000-6.5H5.62L7.12 5h6.63a1.75 1.75 0 110 3.5zm3.6 6.72L15 12.89a.75.75 0 011.27-.67l1.5 1.5c.3.3.3.77 0 1.06l-.44.44z" fill={primaryFill} /></svg>;
}

const ArrowWrapOffFilled = wrapIcon(rawSvg({}), 'ArrowWrapOffFilled');
export default ArrowWrapOffFilled;
      