import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 5a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm-1 3a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const MoreVertical16Regular = wrapIcon(rawSvg({}), 'MoreVertical16Regular');
export default MoreVertical16Regular;
      