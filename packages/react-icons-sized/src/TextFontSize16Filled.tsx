import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.2 2.24a.75.75 0 00-1.4 0l-3.35 9.2L4.7 7.2a.75.75 0 00-1.38 0l-2.5 6a.75.75 0 001.38.58l.54-1.29h2.54l.54 1.29a.75.75 0 001.23.23.75.75 0 00.17-.27l1.18-3.25h4.22l1.19 3.26a.75.75 0 101.4-.52l-4-11zm-.7 2.45L12.07 9H8.93l1.57-4.3zM4.65 11h-1.3L4 9.45 4.65 11z" fill={primaryFill} /></svg>;
}

const TextFontSize16Filled = wrapIcon(rawSvg({}), 'TextFontSize16Filled');
export default TextFontSize16Filled;
      