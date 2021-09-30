import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6-2.17v4.34c0 .57.63.94 1.13.65l4.12-2.39a.5.5 0 000-.86L9.13 7.18A.75.75 0 008 7.83z" fill={primaryFill} /></svg>;
}

const PlayCircle20Filled = wrapIcon(rawSvg({}), 'PlayCircle20Filled');
export default PlayCircle20Filled;
      