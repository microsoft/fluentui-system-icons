import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.69 5.27a.75.75 0 01-.4.98 9.5 9.5 0 107.42 0 .75.75 0 01.58-1.38 11 11 0 11-8.58 0c.38-.16.82.02.98.4z" fill={primaryFill} /><path d="M14 2c.41 0 .75.34.75.75v9.5a.75.75 0 01-1.5 0v-9.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const Power28Regular = wrapIcon(rawSvg({}), 'Power28Regular');
export default Power28Regular;
      