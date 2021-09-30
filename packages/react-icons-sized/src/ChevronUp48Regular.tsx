import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.63 31.88c-.48.5-1.28.5-1.76 0L24 18.02 10.13 31.88a1.25 1.25 0 01-1.76-1.76l14.75-14.75a1.25 1.25 0 011.76 0l14.75 14.75c.5.48.5 1.28 0 1.76z" fill={primaryFill} /></svg>;
}

const ChevronUp48Regular = wrapIcon(rawSvg({}), 'ChevronUp48Regular');
export default ChevronUp48Regular;
      