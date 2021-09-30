import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 22a1 1 0 01-1-1V6a1 1 0 012 0v15a1 1 0 01-1 1zm12 0a1 1 0 01-1-1V10a1 1 0 112 0v11a1 1 0 01-1 1zm-7-1a1 1 0 102 0V3a1 1 0 10-2 0v18z" fill={primaryFill} /></svg>;
}

const TextAlignLeftRotate27024Filled = wrapIcon(rawSvg({}), 'TextAlignLeftRotate27024Filled');
export default TextAlignLeftRotate27024Filled;
      