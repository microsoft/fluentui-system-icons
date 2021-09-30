import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 13a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1zM6 2a1 1 0 011 1v18a1 1 0 11-2 0V3a1 1 0 011-1zm7 12a1 1 0 10-2 0v7a1 1 0 102 0v-7z" fill={primaryFill} /></svg>;
}

const TextAlignJustifyLowRotate9024Filled = wrapIcon(rawSvg({}), 'TextAlignJustifyLowRotate9024Filled');
export default TextAlignJustifyLowRotate9024Filled;
      