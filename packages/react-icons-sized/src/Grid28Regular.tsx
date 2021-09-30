import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 15c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C4.01 25 3 24 3 22.75v-5.5C3 16.01 4 15 5.25 15h5.5zm12 0c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C16.01 25 15 24 15 22.75v-5.5c0-1.24 1-2.25 2.25-2.25h5.5zm-12 1.5h-5.5a.75.75 0 00-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 00-.75-.75zm12 0h-5.5a.75.75 0 00-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 00-.75-.75zM10.75 3C11.99 3 13 4 13 5.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C4.01 13 3 12 3 10.75v-5.5C3 4.01 4 3 5.25 3h5.5zm12 0C23.99 3 25 4 25 5.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C16.01 13 15 12 15 10.75v-5.5C15 4.01 16 3 17.25 3h5.5zm-12 1.5h-5.5a.75.75 0 00-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 00-.75-.75zm12 0h-5.5a.75.75 0 00-.75.75v5.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const Grid28Regular = wrapIcon(rawSvg({}), 'Grid28Regular');
export default Grid28Regular;
      