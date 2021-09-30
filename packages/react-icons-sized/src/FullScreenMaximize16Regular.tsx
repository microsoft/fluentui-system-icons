import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3a.75.75 0 00-.75.75V5.5a.5.5 0 01-1 0V3.75C2 2.78 2.78 2 3.75 2H5.5a.5.5 0 010 1H3.75zM10 2.5c0-.28.22-.5.5-.5h1.75c.97 0 1.75.78 1.75 1.75V5.5a.5.5 0 01-1 0V3.75a.75.75 0 00-.75-.75H10.5a.5.5 0 01-.5-.5zM2.5 10c.28 0 .5.22.5.5v1.75c0 .41.34.75.75.75H5.5a.5.5 0 010 1H3.75C2.78 14 2 13.22 2 12.25V10.5c0-.28.22-.5.5-.5zm11 0c.28 0 .5.22.5.5v1.75c0 .97-.78 1.75-1.75 1.75H10.5a.5.5 0 010-1h1.75c.41 0 .75-.34.75-.75V10.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const FullScreenMaximize16Regular = wrapIcon(rawSvg({}), 'FullScreenMaximize16Regular');
export default FullScreenMaximize16Regular;
      