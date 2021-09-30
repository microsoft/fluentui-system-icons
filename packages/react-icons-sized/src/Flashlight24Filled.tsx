import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 1.25c.41 0 .75.34.75.75v1A.75.75 0 0116 3V2c0-.41.34-.75.75-.75zm3.72 1.22a.75.75 0 111.06 1.06l-2 2a.75.75 0 11-1.06-1.06l2-2zM8.25 6.31V9.2l6.56 6.56h2.88L8.25 6.31zM19.06 15l1.41-1.4c.88-.89.88-2.31 0-3.2l-6.88-6.87a2.25 2.25 0 00-3.18 0L9 4.93 19.06 15zM13 16.06L7.94 11l-4.91 4.9c-.88.89-.88 2.31 0 3.2l1.88 1.87c.88.88 2.3.88 3.18 0l4.91-4.9zm-3.47-1.59c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l1.5-1.5c.3-.3.77-.3 1.06 0zM22 8h-1a.75.75 0 010-1.5h1A.75.75 0 0122 8z" fill={primaryFill} /></svg>;
}

const Flashlight24Filled = wrapIcon(rawSvg({}), 'Flashlight24Filled');
export default Flashlight24Filled;
      