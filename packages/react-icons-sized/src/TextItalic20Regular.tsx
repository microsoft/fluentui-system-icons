import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3a.5.5 0 010 1h-3.16L8.23 16h3.27a.5.5 0 010 1H4a.5.5 0 010-1h3.16l4.61-12H8.5a.5.5 0 010-1H16z" fill={primaryFill} /></svg>;
}

const TextItalic20Regular = wrapIcon(rawSvg({}), 'TextItalic20Regular');
export default TextItalic20Regular;
      