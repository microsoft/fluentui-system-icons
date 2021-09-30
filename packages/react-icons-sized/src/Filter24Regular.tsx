import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 16a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h3zm3-5a.75.75 0 010 1.5h-9a.75.75 0 010-1.5h9zm3-5a.75.75 0 010 1.5h-15a.75.75 0 010-1.5h15z" fill={primaryFill} /></svg>;
}

const Filter24Regular = wrapIcon(rawSvg({}), 'Filter24Regular');
export default Filter24Regular;
      