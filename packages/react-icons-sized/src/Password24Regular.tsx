import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.78 10.22a.75.75 0 00-1.06 1.06l.72.72-.72.72a.75.75 0 101.06 1.06l.72-.72.72.72a.75.75 0 001.06-1.06l-.72-.72.72-.72a.75.75 0 10-1.06-1.06l-.72.72-.72-.72z" fill={primaryFill} /><path d="M5.22 10.22c.3-.3.77-.3 1.06 0l.72.72.72-.72a.75.75 0 111.06 1.06l-.72.72.72.72a.75.75 0 11-1.06 1.06L7 13.06l-.72.72a.75.75 0 01-1.06-1.06l.72-.72-.72-.72a.75.75 0 010-1.06z" fill={primaryFill} /><path d="M16.5 13.5a.75.75 0 000 1.5h1.75a.75.75 0 000-1.5H16.5z" fill={primaryFill} /><path d="M5.25 5A3.25 3.25 0 002 8.25v7.5C2 17.55 3.46 19 5.25 19h13.5c1.8 0 3.25-1.46 3.25-3.25v-7.5C22 6.45 20.55 5 18.75 5H5.25zM3.5 8.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-7.5z" fill={primaryFill} /></svg>;
}

const Password24Regular = wrapIcon(rawSvg({}), 'Password24Regular');
export default Password24Regular;
      