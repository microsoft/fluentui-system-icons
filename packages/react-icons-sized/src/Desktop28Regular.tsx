import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 25H8.25a.75.75 0 01-.1-1.5H10V21H4.25C3.01 21 2 20 2 18.75V5.25C2 4.01 3 3 4.25 3h19.5C24.99 3 26 4 26 5.25v13.5C26 20 25 21 23.75 21H18v2.5h1.75c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01H8.25h11.5zm-3.25-4h-5v2.5h5V21zm7.25-16.5H4.25a.75.75 0 00-.75.75v13.5c0 .42.34.75.75.75h19.5c.41 0 .75-.33.75-.75V5.25a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const Desktop28Regular = wrapIcon(rawSvg({}), 'Desktop28Regular');
export default Desktop28Regular;
      