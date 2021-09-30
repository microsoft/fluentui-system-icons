import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.9 3.65c.2.2.2.5 0 .7L4.76 5.5H8.5a.5.5 0 010 1H4.76L5.9 7.65a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0zM1 6a5 5 0 1110 0A5 5 0 011 6zm5-4a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft12Regular = wrapIcon(rawSvg({}), 'ArrowCircleLeft12Regular');
export default ArrowCircleLeft12Regular;
      