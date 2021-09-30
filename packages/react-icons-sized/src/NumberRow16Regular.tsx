import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5c.28 0 .5.22.5.5v5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M3 2a2 2 0 00-2 2v8c0 1.1.9 2 2 2h2a2 2 0 002-2V4a2 2 0 00-2-2H3zM2 4a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" fill={primaryFill} /><path d="M11.5 5a.5.5 0 000 1h.5v1.5h-.5a.5.5 0 00-.5.5v2.5c0 .28.22.5.5.5h1a.5.5 0 000-1H12V8.5h.5A.5.5 0 0013 8V5.5a.5.5 0 00-.5-.5h-1z" fill={primaryFill} /><path d="M11 2a2 2 0 00-2 2v8c0 1.1.9 2 2 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2zm-1 2a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" fill={primaryFill} /></svg>;
}

const NumberRow16Regular = wrapIcon(rawSvg({}), 'NumberRow16Regular');
export default NumberRow16Regular;
      