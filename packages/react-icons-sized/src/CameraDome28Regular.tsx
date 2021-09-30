import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 16.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-10 0a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zm6.5-5a5 5 0 100 10 5 5 0 000-10zM3.75 3C2.78 3 2 3.78 2 4.75v1.5c0 .7.4 1.3 1 1.58V15a11 11 0 0022 0V7.83c.6-.28 1-.88 1-1.58v-1.5C26 3.78 25.22 3 24.25 3H3.75zM23.5 8v7a9.5 9.5 0 01-19 0V8h19zm.75-1.5H3.75a.25.25 0 01-.25-.25v-1.5c0-.14.11-.25.25-.25h20.5c.14 0 .25.11.25.25v1.5c0 .14-.11.25-.25.25z" fill={primaryFill} /></svg>;
}

const CameraDome28Regular = wrapIcon(rawSvg({}), 'CameraDome28Regular');
export default CameraDome28Regular;
      