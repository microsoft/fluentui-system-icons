import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3A4.5 4.5 0 003 7.5v17A4.5 4.5 0 007.5 29h8.77A9 9 0 1129 16.27V7.5A4.5 4.5 0 0024.5 3h-17zM30 22.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-4.72-3.78a.75.75 0 10-1.06 1.06L25.44 21H22.5a4.25 4.25 0 00-4.25 4.25v.5a.75.75 0 001.5 0v-.5a2.75 2.75 0 012.75-2.75h2.94l-1.22 1.22a.75.75 0 101.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5z" fill={primaryFill} /></svg>;
}

const SquareArrowForward32Filled = wrapIcon(rawSvg({}), 'SquareArrowForward32Filled');
export default SquareArrowForward32Filled;
      