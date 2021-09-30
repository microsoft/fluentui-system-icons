import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H6V3.5z" fill={primaryFill} /><path d="M5.5 11a5.5 5.5 0 004.9-8h2.1A2.5 2.5 0 0115 5.5V9h-3a3 3 0 00-3 3v3H5.5A2.5 2.5 0 013 12.5v-2.1c.75.38 1.6.6 2.5.6z" fill={primaryFill} /><path d="M10 14.98c.32-.04.62-.19.85-.42l3.71-3.71c.23-.23.38-.53.42-.85H12a2 2 0 00-2 2v2.98z" fill={primaryFill} /></svg>;
}

const NoteAdd16Filled = wrapIcon(rawSvg({}), 'NoteAdd16Filled');
export default NoteAdd16Filled;
      