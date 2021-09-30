import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.75c0-.41.34-.75.75-.75h16.5c.41 0 .75.34.75.75v3.5a.75.75 0 01-1.5 0V5.5h-6.75v17h1.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h1.5v-17H6.5v2.75a.75.75 0 01-1.5 0v-3.5z" fill={primaryFill} /></svg>;
}

const TextT28Regular = wrapIcon(rawSvg({}), 'TextT28Regular');
export default TextT28Regular;
      