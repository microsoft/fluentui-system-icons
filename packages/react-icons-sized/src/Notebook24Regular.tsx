import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h10.5zm0 1.5H6.25a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 00-.75-.75zM20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75H20zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75H20zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75H20zm-4.75-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 017 8.25v-2.5c0-.41.34-.75.75-.75h7.5zm-.75 1.5h-6v1h6v-1z" fill={primaryFill} /></svg>;
}

const Notebook24Regular = wrapIcon(rawSvg({}), 'Notebook24Regular');
export default Notebook24Regular;
      