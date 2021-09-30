import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.37 16.12a1.25 1.25 0 000 1.76l14.75 14.75c.48.5 1.28.5 1.76 0l14.75-14.75a1.25 1.25 0 00-1.76-1.76L24 29.98 10.13 16.12a1.25 1.25 0 00-1.76 0z" fill={primaryFill} /></svg>;
}

const ChevronDown48Regular = wrapIcon(rawSvg({}), 'ChevronDown48Regular');
export default ChevronDown48Regular;
      