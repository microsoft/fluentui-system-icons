import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 19a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5h6.5zm4-6a.75.75 0 010 1.5H6.75a.75.75 0 010-1.5h14.5zm3-6a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h20.5z" fill={primaryFill} /></svg>;
}

const Filter28Regular = wrapIcon(rawSvg({}), 'Filter28Regular');
export default Filter28Regular;
      