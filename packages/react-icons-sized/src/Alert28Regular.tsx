import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 3a8.5 8.5 0 018.5 8.25v4.86l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H17.5a3.5 3.5 0 01-7 .2v-.2H5.27a1.28 1.28 0 01-1.23-1.62l.04-.12L5.5 16.1v-4.6C5.5 6.8 9.3 3 14 3zm2 18.65v-.15h-4a2 2 0 004 .15zM14 4.5a7 7 0 00-7 6.76v4.99c0 .07 0 .13-.02.19l-.03.09L5.6 20h16.8l-1.35-3.48a.75.75 0 01-.04-.17V11.5a7 7 0 00-7.01-7z" fill={primaryFill} /></svg>;
}

const Alert28Regular = wrapIcon(rawSvg({}), 'Alert28Regular');
export default Alert28Regular;
      