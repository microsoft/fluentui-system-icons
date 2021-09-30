import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3 15.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 6a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M15 6.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 9a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M15 9.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 12a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M15 12.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7.5 8.5a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /></svg>;
}

const TextPositionSquare20Regular = wrapIcon(rawSvg({}), 'TextPositionSquare20Regular');
export default TextPositionSquare20Regular;
      