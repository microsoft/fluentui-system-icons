import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7.5A4.5 4.5 0 017.5 3h17A4.5 4.5 0 0129 7.5v8.77a9.04 9.04 0 00-2-1.57V7.5A2.5 2.5 0 0024.5 5h-17A2.5 2.5 0 005 7.5v17A2.5 2.5 0 007.5 27h7.2c.43.74.96 1.41 1.57 2H7.5A4.5 4.5 0 013 24.5v-17zm27 15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-4.72-3.78a.75.75 0 10-1.06 1.06L25.44 21H22.5a4.25 4.25 0 00-4.25 4.25v.5a.75.75 0 001.5 0v-.5a2.75 2.75 0 012.75-2.75h2.94l-1.22 1.22a.75.75 0 101.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5z" fill={primaryFill} /></svg>;
}

const SquareArrowForward32Regular = wrapIcon(rawSvg({}), 'SquareArrowForward32Regular');
export default SquareArrowForward32Regular;
      