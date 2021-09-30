import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4a1 1 0 00-1 1v14a1 1 0 102 0V5a1 1 0 00-1-1zm12 2a1 1 0 00-1 1v10a1 1 0 102 0V7a1 1 0 00-1-1zm-7-3a1 1 0 112 0v18a1 1 0 11-2 0V3z" fill={primaryFill} /></svg>;
}

const TextAlignCenterRotate27024Filled = wrapIcon(rawSvg({}), 'TextAlignCenterRotate27024Filled');
export default TextAlignCenterRotate27024Filled;
      