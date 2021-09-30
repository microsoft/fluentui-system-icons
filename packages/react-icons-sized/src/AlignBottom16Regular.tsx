import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 14a.5.5 0 010-1h13a.5.5 0 010 1h-13zm.5-3.75c0 .97.78 1.75 1.75 1.75h1.5C6.22 12 7 11.22 7 10.25v-6.5C7 2.78 6.22 2 5.25 2h-1.5C2.78 2 2 2.78 2 3.75v6.5zm1.75.75a.75.75 0 01-.75-.75v-6.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v6.5c0 .41-.34.75-.75.75h-1.5zM9 10.25c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75v-4.5C14 4.78 13.22 4 12.25 4h-1.5C9.78 4 9 4.78 9 5.75v4.5zm1.75.75a.75.75 0 01-.75-.75v-4.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75h-1.5z" fill={primaryFill} /></svg>;
}

const AlignBottom16Regular = wrapIcon(rawSvg({}), 'AlignBottom16Regular');
export default AlignBottom16Regular;
      