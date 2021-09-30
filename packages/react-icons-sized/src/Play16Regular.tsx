import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3.06A.5.5 0 005 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 000-.88l-8-4.5zM4 3.5a1.5 1.5 0 012.24-1.3l8 4.5a1.5 1.5 0 010 2.6l-8 4.5A1.5 1.5 0 014 12.5v-9z" fill={primaryFill} /></svg>;
}

const Play16Regular = wrapIcon(rawSvg({}), 'Play16Regular');
export default Play16Regular;
      