import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a6 6 0 00-6 6 1 1 0 102 0 4 4 0 018 0c0 1.06-.26 1.74-.61 2.27-.36.53-.84.95-1.44 1.48l-.1.1a8.85 8.85 0 00-1.93 2.14 7.15 7.15 0 00-.92 3.76V20a1 1 0 102 0v-.25c0-1.28.28-2.12.64-2.74a6.94 6.94 0 011.66-1.79c.57-.5 1.24-1.07 1.75-1.84.58-.87.95-1.94.95-3.38a6 6 0 00-6-6z" fill={primaryFill} /><path d="M14 25.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const Question28Filled = wrapIcon(rawSvg({}), 'Question28Filled');
export default Question28Filled;
      