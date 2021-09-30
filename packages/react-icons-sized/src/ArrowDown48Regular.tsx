import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.25 5.25a1.25 1.25 0 10-2.5 0V37.7l-12.6-12.83a1.25 1.25 0 10-1.8 1.76l14.76 15a1.25 1.25 0 001.78 0l14.75-15a1.25 1.25 0 10-1.78-1.76L25.25 37.7V5.25z" fill={primaryFill} /></svg>;
}

const ArrowDown48Regular = wrapIcon(rawSvg({}), 'ArrowDown48Regular');
export default ArrowDown48Regular;
      