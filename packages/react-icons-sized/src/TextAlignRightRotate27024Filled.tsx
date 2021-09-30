import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a1 1 0 00-1 1v15a1 1 0 102 0V3a1 1 0 00-1-1zm12 0a1 1 0 00-1 1v11a1 1 0 102 0V3a1 1 0 00-1-1zm-7 1a1 1 0 112 0v18a1 1 0 11-2 0V3z" fill={primaryFill} /></svg>;
}

const TextAlignRightRotate27024Filled = wrapIcon(rawSvg({}), 'TextAlignRightRotate27024Filled');
export default TextAlignRightRotate27024Filled;
      