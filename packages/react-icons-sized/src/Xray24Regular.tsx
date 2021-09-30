import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 5.75a.75.75 0 00-1.5 0v.75H9A.75.75 0 009 8h2.25v1h-3.5a.75.75 0 000 1.5h3.5v1h-3.5a.75.75 0 000 1.5h3.5v1.5h-2a2.25 2.25 0 102.12 1.5h1.26a2.25 2.25 0 102.12-1.5h-2V13h3.5a.75.75 0 000-1.5h-3.5v-1h3.5a.75.75 0 000-1.5h-3.5V8H15a.75.75 0 000-1.5h-2.25v-.75zm2 10.25a.75.75 0 110 1.5.75.75 0 010-1.5zm-6.25.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM7.25 2A3.25 3.25 0 004 5.25v13.5C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25V5.25C20 3.45 18.54 2 16.75 2h-9.5zM5.5 5.25c0-.97.78-1.75 1.75-1.75h9.5c.97 0 1.75.78 1.75 1.75v13.5c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75V5.25z" fill={primaryFill} /></svg>;
}

const Xray24Regular = wrapIcon(rawSvg({}), 'Xray24Regular');
export default Xray24Regular;
      