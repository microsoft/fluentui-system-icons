import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3.25c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-3.23L8.59 15.5h2.66a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3.23L11.41 4H8.75A.75.75 0 018 3.25z" fill={primaryFill} /></svg>;
}

const TextItalic20Filled = wrapIcon(rawSvg({}), 'TextItalic20Filled');
export default TextItalic20Filled;
      