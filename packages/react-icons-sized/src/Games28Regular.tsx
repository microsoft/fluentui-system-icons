import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1.5-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-14-.25c0-.41.34-.75.75-.75H8v-1.75a.75.75 0 011.5 0V13h1.75a.75.75 0 010 1.5H9.5v1.75a.75.75 0 01-1.5 0V14.5H6.25a.75.75 0 01-.75-.75zM2 14c0-4.7 3.8-8.5 8.5-8.5h7a8.5 8.5 0 110 17h-7A8.5 8.5 0 012 14zm8.5-7a7 7 0 100 14h7a7 7 0 100-14h-7z" fill={primaryFill} /></svg>;
}

const Games28Regular = wrapIcon(rawSvg({}), 'Games28Regular');
export default Games28Regular;
      