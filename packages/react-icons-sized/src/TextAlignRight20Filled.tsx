import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.25c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.25z" fill={primaryFill} /><path d="M2 9.25c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.25z" fill={primaryFill} /><path d="M9.75 13.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /></svg>;
}

const TextAlignRight20Filled = wrapIcon(rawSvg({}), 'TextAlignRight20Filled');
export default TextAlignRight20Filled;
      