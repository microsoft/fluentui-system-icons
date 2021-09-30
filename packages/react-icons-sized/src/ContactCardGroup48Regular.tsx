import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 20a3 3 0 11-6 0 3 3 0 016 0z" fill={primaryFill} /><path d="M22.5 23a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /><path d="M29 21.25c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 110 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M30.25 25.5a1.25 1.25 0 100 2.5h6.5a1.25 1.25 0 100-2.5h-6.5z" fill={primaryFill} /><path d="M10 26.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V28s0 3.5-5 3.5-5-3.5-5-3.5v-1.5z" fill={primaryFill} /><path d="M21.87 29.01c-.07.29-.18.63-.34.99H23a3 3 0 003-3v-.5c0-.83-.67-1.5-1.5-1.5h-2.84c.22.45.34.96.34 1.5v1.56a3.15 3.15 0 01-.02.3c-.02.16-.05.39-.11.65z" fill={primaryFill} /><path d="M4 14.25C4 10.8 6.8 8 10.25 8h27.5C41.2 8 44 10.8 44 14.25v19.5C44 37.2 41.2 40 37.75 40h-27.5A6.25 6.25 0 014 33.75v-19.5zm6.25-3.75a3.75 3.75 0 00-3.75 3.75v19.5a3.75 3.75 0 003.75 3.75h27.5a3.75 3.75 0 003.75-3.75v-19.5a3.75 3.75 0 00-3.75-3.75h-27.5z" fill={primaryFill} /></svg>;
}

const ContactCardGroup48Regular = wrapIcon(rawSvg({}), 'ContactCardGroup48Regular');
export default ContactCardGroup48Regular;
      