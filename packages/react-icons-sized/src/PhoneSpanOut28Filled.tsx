import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2A2.75 2.75 0 006 4.75v4.88a2.25 2.25 0 012.87 2.87h1.38a2.25 2.25 0 010 4.5H8.87A2.25 2.25 0 016 19.87v3.38A2.75 2.75 0 008.75 26h10.5A2.75 2.75 0 0022 23.25v-3.38A2.25 2.25 0 0119.13 17h-1.38a2.25 2.25 0 010-4.5h1.38A2.25 2.25 0 0122 9.63V4.75A2.75 2.75 0 0019.25 2H8.75z" fill={primaryFill} /><path d="M6.22 18.28l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 1.06L5.56 14h4.69a.75.75 0 010 1.5H5.56l1.72 1.72a.75.75 0 11-1.06 1.06z" fill={primaryFill} /><path d="M21.78 11.22l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 01-1.06-1.06l1.72-1.72h-4.69a.75.75 0 010-1.5h4.69l-1.72-1.72a.75.75 0 111.06-1.06z" fill={primaryFill} /></svg>;
}

const PhoneSpanOut28Filled = wrapIcon(rawSvg({}), 'PhoneSpanOut28Filled');
export default PhoneSpanOut28Filled;
      