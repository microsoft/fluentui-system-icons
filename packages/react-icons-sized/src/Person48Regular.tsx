import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a10 10 0 100 20 10 10 0 000-20zm-7.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" fill={primaryFill} /><path d="M12.25 28A4.25 4.25 0 008 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28h-23.5zm-1.75 4.25c0-.97.78-1.75 1.75-1.75h23.5c.97 0 1.75.78 1.75 1.75V33c0 2.74-1.36 4.8-3.72 6.24-2.41 1.47-5.85 2.26-9.78 2.26-3.93 0-7.37-.79-9.78-2.26-2.36-1.43-3.72-3.5-3.72-6.24v-.75z" fill={primaryFill} /></svg>;
}

const Person48Regular = wrapIcon(rawSvg({}), 'Person48Regular');
export default Person48Regular;
      