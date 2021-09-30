import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.25 5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm0 4.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm4.75 3a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM5.75 3a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM5 8c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 8zm4.25 3.5a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5z" fill={primaryFill} /></svg>;
}

const TextBulletListTree16Filled = wrapIcon(rawSvg({}), 'TextBulletListTree16Filled');
export default TextBulletListTree16Filled;
      