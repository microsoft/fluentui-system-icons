import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 15.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H11.5a1 1 0 01-.12-2h.12zm-8-5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2h.12zm-4-5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2h.12z" fill={primaryFill} /></svg>;
}

const TextBulletListTree24Filled = wrapIcon(rawSvg({}), 'TextBulletListTree24Filled');
export default TextBulletListTree24Filled;
      