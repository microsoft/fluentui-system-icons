import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.84 2.66a2.25 2.25 0 00-3.18 0L13.5 6.8v-.56c0-1.24-1-2.25-2.25-2.25h-7C3.01 4 2 5.01 2 6.25v18c0 .97.78 1.75 1.75 1.75h18c1.24 0 2.25-1 2.25-2.25v-7c0-1.24-1-2.25-2.25-2.25h-.56l4.16-4.15c.88-.88.88-2.3 0-3.19l-4.5-4.5zM17.31 14.5H13.5v-3.8l3.8 3.8zm1.41-10.78c.3-.3.77-.3 1.06 0l4.5 4.5c.3.3.3.77 0 1.06l-4.5 4.51c-.3.3-.77.3-1.06 0l-4.5-4.5a.75.75 0 010-1.07l4.5-4.5zM12 6.25v8.25H3.5V6.25c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75zm-8.5 17.5V16H12v8.5H4.25a.75.75 0 01-.75-.75zm10-7.75h8.25c.41 0 .75.34.75.75v7c0 .42-.34.75-.75.75H13.5V16z" fill={primaryFill} /></svg>;
}

const Apps28Regular = wrapIcon(rawSvg({}), 'Apps28Regular');
export default Apps28Regular;
      