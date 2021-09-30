import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /><path d="M7.75 8.5a2.25 2.25 0 014.5 0v5a.75.75 0 001.5 0v-5a3.75 3.75 0 10-7.5 0v5a.75.75 0 001.5 0v-5z" fill={primaryFill} /><path d="M2.75 15.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M16.5 11.75h-1.75v1.5h1.75a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M3.5 11.75h1.75v1.5H3.5a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M8.75 8.75h2.5v1.5h-2.5v-1.5z" fill={primaryFill} /><path d="M8.75 11.75h2.5v1.5h-2.5v-1.5z" fill={primaryFill} /><path d="M5.25 8.75v1.5H3.5a.75.75 0 010-1.5h1.75z" fill={primaryFill} /><path d="M16.5 8.75h-1.75v1.5h1.75a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M13.87 5.75c.32.45.57.95.71 1.5h1.92a.75.75 0 000-1.5h-2.63z" fill={primaryFill} /><path d="M6.13 5.75c-.32.45-.57.95-.71 1.5H3.5a.75.75 0 010-1.5h2.63z" fill={primaryFill} /></svg>;
}

const TextPositionThroughFilled = wrapIcon(rawSvg({}), 'TextPositionThroughFilled');
export default TextPositionThroughFilled;
      