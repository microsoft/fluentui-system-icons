import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M2.75 15.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.5 5.75a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1z" fill={primaryFill} /><path d="M14.75 6.5c0-.41.34-.75.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.5 8.75a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1z" fill={primaryFill} /><path d="M14.75 9.5c0-.41.34-.75.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.5 11.75a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1z" fill={primaryFill} /><path d="M14.75 12.5c0-.41.34-.75.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M7.75 8.5a2.25 2.25 0 014.5 0v5a.75.75 0 001.5 0v-5a3.75 3.75 0 10-7.5 0v5a.75.75 0 001.5 0v-5z" fill={primaryFill} /></svg>;
}

const TextPositionSquareFilled = wrapIcon(rawSvg({}), 'TextPositionSquareFilled');
export default TextPositionSquareFilled;
      