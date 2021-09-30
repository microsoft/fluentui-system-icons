import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 2.5a.75.75 0 00-.75.75V9a6 6 0 005.25 5.95v.8a6 6 0 0012 0v-.84a3 3 0 10-1.5 0v.84a4.5 4.5 0 01-9 0v-.8A6 6 0 0014 9V3.25a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h1.75v5a4.5 4.5 0 11-9 0V4h1.75a.75.75 0 000-1.5h-2.5zm15.75 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const Stethoscope24Regular = wrapIcon(rawSvg({}), 'Stethoscope24Regular');
export default Stethoscope24Regular;
      