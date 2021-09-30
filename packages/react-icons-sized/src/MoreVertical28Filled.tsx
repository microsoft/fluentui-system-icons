import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8.75a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z" fill={primaryFill} /><path d="M14 16.75a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z" fill={primaryFill} /><path d="M11.25 22a2.75 2.75 0 105.5 0 2.75 2.75 0 00-5.5 0z" fill={primaryFill} /></svg>;
}

const MoreVertical28Filled = wrapIcon(rawSvg({}), 'MoreVertical28Filled');
export default MoreVertical28Filled;
      