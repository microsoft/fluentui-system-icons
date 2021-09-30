import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M7.5 14a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /><path d="M7 9.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.85 11.65l-1.5-1.5a.5.5 0 00-.7.7L3.79 12l-1.14 1.15a.5.5 0 00.7.7l1.5-1.5a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const TextHanging20Regular = wrapIcon(rawSvg({}), 'TextHanging20Regular');
export default TextHanging20Regular;
      