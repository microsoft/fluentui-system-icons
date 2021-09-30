import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.97 2.33a.5.5 0 00-.94 0l-3.56 9.8-.34-.81v-.02l-1.67-4a.5.5 0 00-.92 0l-1.66 4-.01.02-.83 1.99a.5.5 0 10.92.38l.7-1.69h2.67l.7 1.7h.01a.5.5 0 00.93-.03L8.3 10h4.4l1.33 3.67a.5.5 0 00.94-.34l-4-11zm-.47 1.63L12.33 9H8.67l1.83-5.04zM4 8.8l.92 2.2H3.08L4 8.8z" fill={primaryFill} /></svg>;
}

const TextFontSize16Regular = wrapIcon(rawSvg({}), 'TextFontSize16Regular');
export default TextFontSize16Regular;
      