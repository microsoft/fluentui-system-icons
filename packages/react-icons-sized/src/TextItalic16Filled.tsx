import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.8 2H7a.75.75 0 000 1.5H9l-3.43 9H3.2a.75.75 0 000 1.5H9a.75.75 0 000-1.5H7.19l3.43-9h2.18a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const TextItalic16Filled = wrapIcon(rawSvg({}), 'TextItalic16Filled');
export default TextItalic16Filled;
      