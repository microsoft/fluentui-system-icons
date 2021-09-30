import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.94 3H6.07A3.25 3.25 0 003 6.26v11.68A3.25 3.25 0 006.26 21h8.29a5.81 5.81 0 01-.97-1.5H6.11c-.9-.08-1.61-.83-1.61-1.75V8h15v3.89c.49.4.99.62 1.5.72V6.07A3.25 3.25 0 0017.94 3zM6.25 4.5h11.5c.97 0 1.75.78 1.75 1.75v.25h-15v-.25c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /><path d="M21 13.62a4.13 4.13 0 01-1.5-.52 5.55 5.55 0 01-1.22-.98.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.04 1.01.27 1.9.69 2.65.32.58.76 1.08 1.31 1.5.52.4 1.15.73 1.87.98.09.03.18.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V14a.4.4 0 00-.4-.33c-.2 0-.4-.02-.6-.05z" fill={primaryFill} /></svg>;
}

const WindowShield24Regular = wrapIcon(rawSvg({}), 'WindowShield24Regular');
export default WindowShield24Regular;
      