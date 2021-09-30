import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12v1.75a3.75 3.75 0 01-7.15 1.59A4.29 4.29 0 0111.5 17C9 17 7 14.74 7 12s2-5 4.5-5c1.16 0 2.2.48 3 1.27v-.52a.75.75 0 011.5-.1v6.1a2.25 2.25 0 004.5.15V12a8.5 8.5 0 10-5.51 7.96.75.75 0 01.52 1.4A10 10 0 1122 11.72l.01.29v1.75V12zM11.5 8.5c-1.63 0-3 1.55-3 3.5s1.37 3.5 3 3.5 3-1.55 3-3.5-1.37-3.5-3-3.5z" fill={primaryFill} /></svg>;
}

const Mention24Regular = wrapIcon(rawSvg({}), 'Mention24Regular');
export default Mention24Regular;
      