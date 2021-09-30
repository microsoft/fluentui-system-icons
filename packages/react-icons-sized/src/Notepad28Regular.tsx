import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 10.25c0-.41.34-.75.75-.75h10a.75.75 0 010 1.5h-10a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M8 14.75c0-.41.34-.75.75-.75h10a.75.75 0 010 1.5h-10a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M8.75 18.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /><path d="M14 2c.41 0 .75.34.75.75V4h3.75V2.75a.75.75 0 011.5 0V4h.75C21.99 4 23 5 23 6.25v13c0 .2-.08.39-.22.53l-5.5 5.5a.75.75 0 01-.53.22h-10c-1.24 0-2.25-1-2.25-2.25v-17C4.5 5.01 5.5 4 6.75 4H8V2.75a.75.75 0 011.5 0V4h3.75V2.75c0-.41.34-.75.75-.75zM6 6.25v17c0 .41.34.75.75.75H16v-3.25c0-1.25 1-2.25 2.25-2.25h3.25V6.25a.75.75 0 00-.75-.75h-14a.75.75 0 00-.75.75zM18.25 20a.75.75 0 00-.75.75v2.19L20.44 20h-2.2z" fill={primaryFill} /></svg>;
}

const Notepad28Regular = wrapIcon(rawSvg({}), 'Notepad28Regular');
export default Notepad28Regular;
      