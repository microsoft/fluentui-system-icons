import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 4.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-1.25 3a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM10.25 3a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h8.5zM11 8a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75zm-.75 3.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h8.5z" fill={primaryFill} /></svg>;
}

const TextBulletListRtl16Filled = wrapIcon(rawSvg({}), 'TextBulletListRtl16Filled');
export default TextBulletListRtl16Filled;
      