import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.25 15.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h4.42c-.11.48-.17.98-.17 1.5H6.75a.75.75 0 01-.1-1.5h.1zm0-5h14.6a.75.75 0 00-.1-1.5H6.65a.75.75 0 00.1 1.5zm-3.5-2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0-6.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h14.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h.1zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const TextBulletListAdd24Regular = wrapIcon(rawSvg({}), 'TextBulletListAdd24Regular');
export default TextBulletListAdd24Regular;
      