import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.2 11.3l-6.5-6.5a1 1 0 00-1.49 1.31l.08.1L15.1 11H4a1 1 0 00-1 .88V12a1 1 0 00.88 1H15.1l-4.8 4.8a1 1 0 00-.08 1.31l.08.1a1 1 0 001.32.08l.1-.08 6.5-6.5a1 1 0 00.08-1.32l-.08-.1-6.5-6.5 6.5 6.5zm2.8 7.2v-13a1 1 0 10-2 0v13a1 1 0 102 0z" fill={primaryFill} /></svg>;
}

const KeyboardTab24Filled = wrapIcon(rawSvg({}), 'KeyboardTab24Filled');
export default KeyboardTab24Filled;
      