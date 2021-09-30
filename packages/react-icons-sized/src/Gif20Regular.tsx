import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.4 3c1.39 0 2.52 1.19 2.6 2.68v8.48c0 1.51-1.09 2.75-2.45 2.84H4.6c-1.39 0-2.52-1.19-2.6-2.68V5.84C2 4.33 3.09 3.1 4.45 3H15.4zm-.15 1H4.75C3.82 4 3.07 4.8 3 5.8V14.07c0 1.02.72 1.86 1.63 1.93h10.62c.93 0 1.68-.8 1.75-1.8V5.93c0-1.02-.72-1.86-1.63-1.93h-.12zm-8.4 3c.62 0 1.15.1 1.58.3.27.12.38.43.24.67a.56.56 0 01-.72.22C7.68 8.07 7.3 8 6.85 8c-1.03 0-1.77.83-1.77 2 0 1.12.81 2 1.77 2 .6 0 1-.35 1.06-.67v-.83h-.37c-.3 0-.54-.22-.54-.5 0-.25.2-.45.44-.5h1.02c.26 0 .49.18.53.41l.01.1v1.24C9 12.12 8.11 13 6.85 13A2.92 2.92 0 014 10c0-1.68 1.18-3 2.85-3zM11 7a.5.5 0 01.5.41v5.09a.5.5 0 01-1 .09V7.5c0-.28.22-.5.5-.5zm4.5 0a.5.5 0 01.09 1H14v2h1.5a.5.5 0 01.09 1H14v1.5a.5.5 0 01-1 .09V7.5c0-.28.22-.5.5-.5h2z" fill={primaryFill} /></svg>;
}

const Gif20Regular = wrapIcon(rawSvg({}), 'Gif20Regular');
export default Gif20Regular;
      