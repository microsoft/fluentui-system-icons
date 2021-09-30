import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.13 15.37c.5.48.5 1.28 0 1.76l-5.61 5.62h14.23a1.25 1.25 0 110 2.5H18.52l5.61 5.62a1.25 1.25 0 01-1.76 1.76l-7.75-7.75a1.25 1.25 0 010-1.76l7.75-7.75a1.25 1.25 0 011.76 0zM24 4a20 20 0 110 40 20 20 0 010-40zm17.5 20a17.5 17.5 0 10-35 0 17.5 17.5 0 0035 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft48Regular = wrapIcon(rawSvg({}), 'ArrowCircleLeft48Regular');
export default ArrowCircleLeft48Regular;
      