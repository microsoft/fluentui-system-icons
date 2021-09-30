import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2C9.01 2 8 3 8 4.25v3c0 .41-.34.75-.75.75h-3C3.01 8 2 9 2 10.25v3c0 1.24 1 2.25 2.25 2.25h9c1.24 0 2.25-1 2.25-2.25v-3c0-.41.34-.75.75-.75h3c1.24 0 2.25-1 2.25-2.25v-3c0-1.24-1-2.25-2.25-2.25h-9zm9 6H15.5V3.5h3.75c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75zM14 8H9.5V4.25c0-.41.34-.75.75-.75H14V8zM8 9.5V14H4.25a.75.75 0 01-.75-.75v-3c0-.41.34-.75.75-.75H8zm1.5 0H14v3.75c0 .41-.34.75-.75.75H9.5V9.5zm11.25 3h3c1.24 0 2.25 1 2.25 2.25v9c0 1.24-1 2.25-2.25 2.25h-16c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25h10c.41 0 .75-.34.75-.75v-3c0-1.24 1-2.25 2.25-2.25zm-2.25 12V20h-5v4.5h5zm6-4.5H20v4.5h3.75c.41 0 .75-.34.75-.75V20zM20 18.5h4.5v-3.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v3.75zM12 20H7.75a.75.75 0 00-.75.75v3c0 .41.34.75.75.75H12V20z" fill={primaryFill} /></svg>;
}

const TetrisApp28Regular = wrapIcon(rawSvg({}), 'TetrisApp28Regular');
export default TetrisApp28Regular;
      