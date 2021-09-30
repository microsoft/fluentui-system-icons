import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 16a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h10.5a.75.75 0 01.1 1.5h-10.6a.75.75 0 01-.1-1.5h.1zM3.25 11a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h14.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h.1zM3.25 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h14.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /></svg>;
}

const TextBulletListTree24Regular = wrapIcon(rawSvg({}), 'TextBulletListTree24Regular');
export default TextBulletListTree24Regular;
      