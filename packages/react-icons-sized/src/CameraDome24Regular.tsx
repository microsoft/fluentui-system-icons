import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-8a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm-4 5.5a4 4 0 118 0 4 4 0 01-8 0zM2 3.75C2 2.78 2.78 2 3.75 2h16.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V13a9 9 0 11-18 0V6.83c-.6-.28-1-.88-1-1.58v-1.5zM4.5 7v6a7.5 7.5 0 1015 0V7h-15zm-.75-3.5a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25H3.75z" fill={primaryFill} /></svg>;
}

const CameraDome24Regular = wrapIcon(rawSvg({}), 'CameraDome24Regular');
export default CameraDome24Regular;
      