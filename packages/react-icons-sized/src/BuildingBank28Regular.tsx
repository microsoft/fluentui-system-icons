import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm.89-6.7a1.5 1.5 0 00-1.78 0l-9.5 7a1.5 1.5 0 00.9 2.7H5v7.25c-1.17.49-2 1.65-2 3v1.5c0 .41.34.75.75.75h20.5c.41 0 .75-.34.75-.75v-1.5c0-1.35-.83-2.51-2-3V12h.5a1.5 1.5 0 00.89-2.71l-9.5-7zM6.5 19v-7H9v7H6.5zm15-7v7H19v-7h2.5zm-4 0v7h-2.75v-7h2.75zm-4.25 0v7H10.5v-7h2.75zM4.5 10.5l9.5-7 9.5 7h-19zm0 11.75c0-.97.78-1.75 1.75-1.75h15.5c.97 0 1.75.78 1.75 1.75V23h-19v-.75z" fill={primaryFill} /></svg>;
}

const BuildingBank28Regular = wrapIcon(rawSvg({}), 'BuildingBank28Regular');
export default BuildingBank28Regular;
      