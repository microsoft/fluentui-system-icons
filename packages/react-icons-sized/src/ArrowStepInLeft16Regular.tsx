import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.7 8.5h6.8a.5.5 0 000-1H7.7l2.15-2.15a.5.5 0 00-.7-.7l-3 3a.5.5 0 000 .7l3 3a.5.5 0 00.7-.7L7.71 8.5zM1 8a2 2 0 114 0 2 2 0 01-4 0zm1 0a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const ArrowStepInLeft16Regular = wrapIcon(rawSvg({}), 'ArrowStepInLeft16Regular');
export default ArrowStepInLeft16Regular;
      