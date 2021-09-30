import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 4a10 10 0 100 20 10 10 0 000-20zm-7.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" fill={primaryFill} /><path d="M10.25 28A4.25 4.25 0 006 32.25V33c0 3.76 1.94 6.57 4.92 8.38C13.85 43.16 17.79 44 22 44v-2.5c-3.93 0-7.37-.79-9.78-2.26C9.86 37.81 8.5 35.74 8.5 33v-.75c0-.97.78-1.75 1.75-1.75H22V30c0-.73.2-1.41.54-2H10.25z" fill={primaryFill} /><path d="M24 31a3 3 0 013-3h16a3 3 0 013 3v.79l-11 5.1-11-5.1V31z" fill={primaryFill} /><path d="M35.42 38.9L46 34v9a3 3 0 01-3 3H27a3 3 0 01-3-3v-9l10.58 4.9a1 1 0 00.84 0z" fill={primaryFill} /></svg>;
}

const PersonMail48Regular = wrapIcon(rawSvg({}), 'PersonMail48Regular');
export default PersonMail48Regular;
      