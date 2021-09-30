import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M32.63 24.13c-.48.5-1.28.5-1.76 0l-5.62-5.61v14.23a1.25 1.25 0 11-2.5 0V18.52l-5.62 5.61a1.25 1.25 0 01-1.76-1.76l7.75-7.75a1.25 1.25 0 011.76 0l7.75 7.75c.5.48.5 1.28 0 1.76zM44 24a20 20 0 11-40 0 20 20 0 0140 0zM24 41.5a17.5 17.5 0 100-35 17.5 17.5 0 000 35z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp48Regular = wrapIcon(rawSvg({}), 'ArrowCircleUp48Regular');
export default ArrowCircleUp48Regular;
      