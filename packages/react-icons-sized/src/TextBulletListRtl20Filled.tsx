import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM13 5.75a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h9.5c.41 0 .75-.34.75-.75zM12.25 10a.75.75 0 010 1.5h-9.5a.75.75 0 010-1.5h9.5zm0 5a.75.75 0 010 1.5h-9.5a.75.75 0 010-1.5h9.5zm3.25-4.25a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM16.75 17a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill={primaryFill} /></svg>;
}

const TextBulletListRtl20Filled = wrapIcon(rawSvg({}), 'TextBulletListRtl20Filled');
export default TextBulletListRtl20Filled;
      