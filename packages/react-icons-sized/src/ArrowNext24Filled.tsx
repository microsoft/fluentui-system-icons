import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3a1 1 0 011 .88V20a1 1 0 01-2 .12V4a1 1 0 011-1zm-12.7.3A1 1 0 016.6 3.2l.1.08 8 8a1 1 0 01.08 1.32l-.08.1-8 8a1 1 0 01-1.5-1.32l.08-.1L12.6 12l-7.3-7.3a1 1 0 010-1.4z" fill={primaryFill} /></svg>;
}

const ArrowNext24Filled = wrapIcon(rawSvg({}), 'ArrowNext24Filled');
export default ArrowNext24Filled;
      