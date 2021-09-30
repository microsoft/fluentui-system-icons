import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2A2.75 2.75 0 006 4.75v5.13c.87-.59 2.07-.5 2.84.28l3 3c.88.88.88 2.3 0 3.18l-3 3c-.77.77-1.97.87-2.84.28v3.63A2.75 2.75 0 008.75 26h10.5A2.75 2.75 0 0022 23.25v-3.63c-.87.59-2.07.5-2.84-.28l-3-3a2.25 2.25 0 010-3.18l3-3A2.25 2.25 0 0122 9.88V4.75A2.75 2.75 0 0019.25 2H8.75z" fill={primaryFill} /><path d="M6.72 12.28L8.44 14H3.75a.75.75 0 000 1.5h4.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06z" fill={primaryFill} /><path d="M21.28 12.28L19.56 14h4.69a.75.75 0 010 1.5h-4.69l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 111.06 1.06z" fill={primaryFill} /></svg>;
}

const PhoneSpanIn28Filled = wrapIcon(rawSvg({}), 'PhoneSpanIn28Filled');
export default PhoneSpanIn28Filled;
      