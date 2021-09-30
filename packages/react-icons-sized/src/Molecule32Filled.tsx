import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 16a7 7 0 10-6.4-4.17l-2.84 2.2a5.49 5.49 0 10-.26 7.25l4.77 2.68a4.5 4.5 0 101.1-1.68l-4.78-2.68a5.48 5.48 0 00.14-3.8l2.93-2.27A6.98 6.98 0 0022 16z" fill={primaryFill} /></svg>;
}

const Molecule32Filled = wrapIcon(rawSvg({}), 'Molecule32Filled');
export default Molecule32Filled;
      