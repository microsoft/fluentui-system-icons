import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 7a1 1 0 102 0 1 1 0 00-2 0zM9 7a1 1 0 102 0 1 1 0 00-2 0zM4 8a1 1 0 110-2 1 1 0 010 2zm11 5a1 1 0 102 0 1 1 0 00-2 0zm-5 1a1 1 0 110-2 1 1 0 010 2zm-7-1a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const ReOrderDotsHorizontal20Regular = wrapIcon(rawSvg({}), 'ReOrderDotsHorizontal20Regular');
export default ReOrderDotsHorizontal20Regular;
      