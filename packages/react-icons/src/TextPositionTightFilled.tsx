import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /><path d="M3.5 14.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /><path d="M10 6.25c-1.24 0-2.25 1-2.25 2.25v5a.75.75 0 01-1.5 0v-5a3.75 3.75 0 117.5 0v5a.75.75 0 01-1.5 0v-5c0-1.24-1-2.25-2.25-2.25z" fill={primaryFill} /><path d="M3.5 11.75h1.75v1.5H3.5a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M16.5 13.25h-1.75v-1.5h1.75a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M14.75 8.75v1.5h1.75a.75.75 0 000-1.5h-1.75z" fill={primaryFill} /><path d="M6.13 5.75c-.32.45-.57.95-.71 1.5H3.5a.75.75 0 010-1.5h2.63z" fill={primaryFill} /><path d="M16.5 7.25h-1.92a4.73 4.73 0 00-.7-1.5h2.62a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M5.25 8.75v1.5H3.5a.75.75 0 010-1.5h1.75z" fill={primaryFill} /></svg>;
}

const TextPositionTightFilled = wrapIcon(rawSvg({}), 'TextPositionTightFilled');
export default TextPositionTightFilled;
      