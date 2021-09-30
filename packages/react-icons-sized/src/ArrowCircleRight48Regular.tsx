import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.87 32.63a1.25 1.25 0 010-1.76l5.61-5.62H15.25a1.25 1.25 0 110-2.5h14.23l-5.61-5.62a1.25 1.25 0 011.76-1.76l7.75 7.75c.5.48.5 1.28 0 1.76l-7.75 7.75c-.48.5-1.28.5-1.76 0zM24 44a20 20 0 110-40 20 20 0 010 40zM6.5 24a17.5 17.5 0 1035 0 17.5 17.5 0 00-35 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight48Regular = wrapIcon(rawSvg({}), 'ArrowCircleRight48Regular');
export default ArrowCircleRight48Regular;
      