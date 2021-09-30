import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 16.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM9.25 16a.75.75 0 100 1.5.75.75 0 000-1.5zM4 5.25C4 3.45 5.46 2 7.25 2h9.5C18.55 2 20 3.46 20 5.25v13.5c0 1.8-1.46 3.25-3.25 3.25h-9.5A3.25 3.25 0 014 18.75V5.25zm8.75.5a.75.75 0 00-1.5 0v.75H9A.75.75 0 009 8h2.25v1h-3.5a.75.75 0 000 1.5h3.5v1h-3.5a.75.75 0 000 1.5h3.5v1.5h-2a2.25 2.25 0 102.12 1.5h1.26a2.25 2.25 0 102.12-1.5h-2V13h3.5a.75.75 0 000-1.5h-3.5v-1h3.5a.75.75 0 000-1.5h-3.5V8H15a.75.75 0 000-1.5h-2.25v-.75z" fill={primaryFill} /></svg>;
}

const Xray24Filled = wrapIcon(rawSvg({}), 'Xray24Filled');
export default Xray24Filled;
      