import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 2a.75.75 0 00-.75.75v5a4.5 4.5 0 003.75 4.44v1.06a5.25 5.25 0 1010.5 0v-1.1a2.75 2.75 0 10-1.5 0v1.1a3.75 3.75 0 11-7.5 0v-1.06A4.5 4.5 0 0011 7.75v-5a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5h.75v4.25a3 3 0 11-6 0V3.5h.75a.75.75 0 000-1.5h-1.5zM15.5 8.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const Stethoscope20Filled = wrapIcon(rawSvg({}), 'Stethoscope20Filled');
export default Stethoscope20Filled;
      