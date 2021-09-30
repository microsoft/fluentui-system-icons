import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 5.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM6.75 12a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z" fill={primaryFill} /></svg>;
}

const MoreVertical16Filled = wrapIcon(rawSvg({}), 'MoreVertical16Filled');
export default MoreVertical16Filled;
      