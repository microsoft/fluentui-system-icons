import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a5 5 0 100 10A5 5 0 006 1zm-.1 2.65c.2.2.2.5 0 .7L4.76 5.5H8.5a.5.5 0 010 1H4.76L5.9 7.65a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft12Filled = wrapIcon(rawSvg({}), 'ArrowCircleLeft12Filled');
export default ArrowCircleLeft12Filled;
      