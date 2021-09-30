import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.37 23.87a1.25 1.25 0 011.76 0l5.62 5.61V15.25a1.25 1.25 0 112.5 0v14.23l5.62-5.61a1.25 1.25 0 011.76 1.76l-7.75 7.75c-.48.5-1.28.5-1.76 0l-7.75-7.75a1.25 1.25 0 010-1.76zM4 24a20 20 0 1140 0 20 20 0 01-40 0zM24 6.5a17.5 17.5 0 100 35 17.5 17.5 0 000-35z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown48Regular = wrapIcon(rawSvg({}), 'ArrowCircleDown48Regular');
export default ArrowCircleDown48Regular;
      