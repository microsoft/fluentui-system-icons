import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 2a.5.5 0 000 1h13a.5.5 0 000-1h-13zM2 5.75C2 4.78 2.78 4 3.75 4h1.5C6.22 4 7 4.78 7 5.75v6.5C7 13.22 6.22 14 5.25 14h-1.5C2.78 14 2 13.22 2 12.25v-6.5zM3.75 5a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-6.5A.75.75 0 005.25 5h-1.5zM9 5.75C9 4.78 9.78 4 10.75 4h1.5c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75h-1.5C9.78 12 9 11.22 9 10.25v-4.5zM10.75 5a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75h-1.5z" fill={primaryFill} /></svg>;
}

const AlignTop16Regular = wrapIcon(rawSvg({}), 'AlignTop16Regular');
export default AlignTop16Regular;
      