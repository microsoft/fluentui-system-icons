import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 4.5a.25.25 0 00-.25.25v4c0 .41-.34.75-.75.75h-4a.25.25 0 00-.25.25v4.5c0 .14.11.25.25.25h4c.41 0 .75.34.75.75v4c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-4c0-.41.34-.75.75-.75h4c.14 0 .25-.11.25-.25v-4.5a.25.25 0 00-.25-.25h-4a.75.75 0 01-.75-.75v-4a.25.25 0 00-.25-.25h-4.5zM8 4.75C8 3.78 8.78 3 9.75 3h4.5c.97 0 1.75.78 1.75 1.75V8h3.25c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75H16v3.25c0 .97-.78 1.75-1.75 1.75h-4.5C8.78 21 8 20.22 8 19.25V16H4.75C3.78 16 3 15.22 3 14.25v-4.5C3 8.78 3.78 8 4.75 8H8V4.75z" fill={primaryFill} /></svg>;
}

const Doctor24Regular = wrapIcon(rawSvg({}), 'Doctor24Regular');
export default Doctor24Regular;
      