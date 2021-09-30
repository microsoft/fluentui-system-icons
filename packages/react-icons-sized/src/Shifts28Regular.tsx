import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 7.75a.75.75 0 00-1.5 0v7c0 .41.34.75.75.75h5.5a.75.75 0 000-1.5H14.5V7.75z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v15.5C3 23.55 4.46 25 6.25 25h15.5c1.8 0 3.25-1.46 3.25-3.25V6.25C25 4.45 23.54 3 21.75 3H6.25zM4.5 6.25c0-.97.78-1.75 1.75-1.75h15.5c.97 0 1.75.78 1.75 1.75v15.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25z" fill={primaryFill} /></svg>;
}

const Shifts28Regular = wrapIcon(rawSvg({}), 'Shifts28Regular');
export default Shifts28Regular;
      