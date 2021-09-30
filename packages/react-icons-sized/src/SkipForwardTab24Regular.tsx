import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.5 3.75a.75.75 0 00-1.5 0v3.4A9.61 9.61 0 0015.47 4 11.18 11.18 0 002.6 8.89a.75.75 0 101.32.72 9.69 9.69 0 0111.12-4.17 8.33 8.33 0 014.13 3.06h-3.91a.75.75 0 000 1.5h5.5c.41 0 .75-.34.75-.75v-5.5zM8 14a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h8a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5H8zm-2 .5c0-1.1.9-2 2-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z" fill={primaryFill} /></svg>;
}

const SkipForwardTab24Regular = wrapIcon(rawSvg({}), 'SkipForwardTab24Regular');
export default SkipForwardTab24Regular;
      