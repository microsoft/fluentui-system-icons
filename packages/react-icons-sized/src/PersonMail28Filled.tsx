import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.17 26a3 3 0 01-.17-1v-7c0-.77.29-1.47.76-2H6a3 3 0 00-3 3v.71C3 23.43 7.21 26 13 26h.17z" fill={primaryFill} /><path d="M19 8A6 6 0 107 8a6 6 0 0012 0z" fill={primaryFill} /><path d="M16.5 16a2.5 2.5 0 00-2.5 2.5v.2l6.5 3.24L27 18.7v-.19a2.5 2.5 0 00-2.5-2.5h-8z" fill={primaryFill} /><path d="M27 19.8l-6.28 3.15a.5.5 0 01-.44 0L14 19.8v4.69a2.5 2.5 0 002.5 2.5h8a2.5 2.5 0 002.5-2.5v-4.7z" fill={primaryFill} /></svg>;
}

const PersonMail28Filled = wrapIcon(rawSvg({}), 'PersonMail28Filled');
export default PersonMail28Filled;
      