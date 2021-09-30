import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /><path d="M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H2.75C1.78 13 1 12.22 1 11.25v-6.5zM6 12h4v-1H6v1zm5 0h2.25c.41 0 .75-.34.75-.75v-6.5a.75.75 0 00-.75-.75H2.75a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75H5v-1a1 1 0 011-1h4a1 1 0 011 1v1z" fill={primaryFill} /></svg>;
}

const VideoPerson16Regular = wrapIcon(rawSvg({}), 'VideoPerson16Regular');
export default VideoPerson16Regular;
      