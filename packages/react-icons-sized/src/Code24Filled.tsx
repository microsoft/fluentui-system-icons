import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.09 18.61l6-14a1 1 0 011.87.67l-.04.11-6 14a1 1 0 01-1.87-.67l.04-.1 6-14.01-6 14zm-5.8-7.32l4-4a1 1 0 011.5 1.32l-.08.1L4.4 12l3.3 3.3a1 1 0 01-1.32 1.5l-.1-.1-4-4a1 1 0 01-.08-1.31l.08-.1 4-4-4 4zm14-4a1 1 0 011.32-.08l.1.08 4 4a1 1 0 01.08 1.32l-.08.1-4 4a1 1 0 01-1.5-1.33l.08-.1L19.6 12l-3.3-3.3a1 1 0 010-1.4z" fill={primaryFill} /></svg>;
}

const Code24Filled = wrapIcon(rawSvg({}), 'Code24Filled');
export default Code24Filled;
      