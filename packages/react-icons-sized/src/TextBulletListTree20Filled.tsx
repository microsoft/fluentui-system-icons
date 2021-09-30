import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.25 6.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M7 5.25c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 017 5.25z" fill={primaryFill} /><path d="M7.75 9a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z" fill={primaryFill} /><path d="M11.75 13.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" fill={primaryFill} /><path d="M4.5 9.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M7.25 15.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const TextBulletListTree20Filled = wrapIcon(rawSvg({}), 'TextBulletListTree20Filled');
export default TextBulletListTree20Filled;
      