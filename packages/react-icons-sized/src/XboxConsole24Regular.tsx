import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M5.75 2a.75.75 0 00-.75.75v18.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V2.75a.75.75 0 00-.75-.75H5.75zM9.5 20.5v-8.75a.75.75 0 00-1.5 0v8.75H6.5v-17h11v17h-8z" fill={primaryFill} /></svg>;
}

const XboxConsole24Regular = wrapIcon(rawSvg({}), 'XboxConsole24Regular');
export default XboxConsole24Regular;
      