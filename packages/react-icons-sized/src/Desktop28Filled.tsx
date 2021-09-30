import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.75 3C24.99 3 26 4 26 5.25v13.5C26 20 25 21 23.75 21H18v2.5h1.75c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01H8.25a.75.75 0 01-.1-1.5H10V21H4.25C3.01 21 2 20 2 18.75V5.25C2 4.01 3 3 4.25 3h19.5zM16.5 21h-5v2.5h5V21z" fill={primaryFill} /></svg>;
}

const Desktop28Filled = wrapIcon(rawSvg({}), 'Desktop28Filled');
export default Desktop28Filled;
      