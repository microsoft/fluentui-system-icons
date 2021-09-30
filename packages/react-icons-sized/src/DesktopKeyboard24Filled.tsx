import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.72 22h2.53c-.16-.38-.25-.8-.25-1.25v-5.5c0-1.8 1.46-3.25 3.25-3.25h8.5c.44 0 .86.09 1.25.25V5.1A2.25 2.25 0 0019.74 3H4.1A2.25 2.25 0 002 5.26v10.66c.08 1.13 1 2.04 2.15 2.09H4h3.5v2.5H5.65a.75.75 0 00.07 1.5h1zM10 15.25c0-1.24 1-2.25 2.25-2.25h8.5c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-8.5C11.01 23 10 22 10 20.75v-5.5zm4 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm3.5 0a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm2.5.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.25 18a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-4.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-2 2c0 .41.34.75.75.75h5.5a.75.75 0 000-1.5h-5.5a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
}

const DesktopKeyboard24Filled = wrapIcon(rawSvg({}), 'DesktopKeyboard24Filled');
export default DesktopKeyboard24Filled;
      