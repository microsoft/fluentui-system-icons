import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 4v3.85a.75.75 0 01-.72.65H4.64A.75.75 0 014 7.74V4h16zm-4.5 9.5h-7V21l6.58-3.1c.23-.11.38-.33.42-.58V13.5z" fill={primaryFill} /></svg>;
}

const HighlightAccent24Filled = wrapIcon(rawSvg({}), 'HighlightAccent24Filled');
export default HighlightAccent24Filled;
      