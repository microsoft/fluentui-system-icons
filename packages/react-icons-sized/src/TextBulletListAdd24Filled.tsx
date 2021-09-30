import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 14.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5h4c-.26.62-.43 1.3-.48 2H7.5a1 1 0 01-.12-2h.12zm0-4h13.62A1 1 0 0021 9H7.38a1 1 0 00.12 2zm-4-2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 .5H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2h.12zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const TextBulletListAdd24Filled = wrapIcon(rawSvg({}), 'TextBulletListAdd24Filled');
export default TextBulletListAdd24Filled;
      