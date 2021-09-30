import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 16a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill={primaryFill} /><path d="M24 27.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill={primaryFill} /><path d="M20.5 35.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" fill={primaryFill} /></svg>;
}

const MoreVertical48Filled = wrapIcon(rawSvg({}), 'MoreVertical48Filled');
export default MoreVertical48Filled;
      