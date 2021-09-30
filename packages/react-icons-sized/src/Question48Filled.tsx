import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 5c-5.55 0-10 4.51-10 10.25a1.5 1.5 0 003 0A7.06 7.06 0 0124 8c3.83 0 7 3.11 7 7.25 0 1.84-.45 2.85-1.02 3.6-.48.63-1.03 1.09-1.73 1.68l-1 .85a12.25 12.25 0 00-3.3 4.37c-.9 2.04-1.45 4.73-1.45 8.5v.25a1.5 1.5 0 003 0v-.25c0-3.48.51-5.73 1.2-7.28a9.27 9.27 0 012.54-3.35c.22-.18.46-.38.7-.6.8-.66 1.73-1.43 2.43-2.35 1.01-1.33 1.63-3 1.63-5.42C34 9.51 29.55 5 24 5z" fill={primaryFill} /><path d="M24 42a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" fill={primaryFill} /></svg>;
}

const Question48Filled = wrapIcon(rawSvg({}), 'Question48Filled');
export default Question48Filled;
      