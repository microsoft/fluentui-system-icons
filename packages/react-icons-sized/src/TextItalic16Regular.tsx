import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2H7a.5.5 0 000 1h2.47L5.66 13H3a.5.5 0 000 1h6a.5.5 0 000-1H6.73l3.81-10H13a.5.5 0 000-1z" fill={primaryFill} /></svg>;
}

const TextItalic16Regular = wrapIcon(rawSvg({}), 'TextItalic16Regular');
export default TextItalic16Regular;
      