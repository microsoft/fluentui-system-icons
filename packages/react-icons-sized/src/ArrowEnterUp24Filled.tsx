import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 21a1 1 0 01-.88 1H12.5A3.5 3.5 0 019 18.7V5.4l-3.3 3.3a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 5-5a1 1 0 01.11-.1l.12-.07.1-.05.11-.03.12-.03h.06L10 2h.08l.12.02.11.03.11.04.1.06.1.06.09.08 5 5a1 1 0 01-1.32 1.5l-.1-.08L11 5.4V18.5c0 .78.6 1.42 1.36 1.5H19a1 1 0 011 1z" fill={primaryFill} /></svg>;
}

const ArrowEnterUp24Filled = wrapIcon(rawSvg({}), 'ArrowEnterUp24Filled');
export default ArrowEnterUp24Filled;
      