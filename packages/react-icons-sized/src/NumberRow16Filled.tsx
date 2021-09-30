import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4c0-1.1.9-2 2-2h2a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm3 1a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5A.5.5 0 004 5z" fill={primaryFill} /><path d="M9 4c0-1.1.9-2 2-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V4zm2 1.5c0 .28.22.5.5.5h.5v1.5h-.5a.5.5 0 00-.5.5v2.5c0 .28.22.5.5.5h1a.5.5 0 000-1H12V8.5h.5A.5.5 0 0013 8V5.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const NumberRow16Filled = wrapIcon(rawSvg({}), 'NumberRow16Filled');
export default NumberRow16Filled;
      