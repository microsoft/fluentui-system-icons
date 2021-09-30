import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2A2.75 2.75 0 002 4.75v6.5A2.75 2.75 0 004.75 14h1.5a5.5 5.5 0 01-.88-1.5h-.62c-.69 0-1.25-.56-1.25-1.25V5h9v.37a5.5 5.5 0 011.5.89V4.75A2.75 2.75 0 0011.25 2h-6.5zm5.75 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-4.85a.5.5 0 01-.7.7L11 9.71v2.79a.5.5 0 01-1 0V9.7l-1.15 1.15a.5.5 0 01-.7-.7l2-2A.5.5 0 0110.5 8a.5.5 0 01.35.14l2 2z" fill={primaryFill} /></svg>;
}

const WindowArrowUp16Filled = wrapIcon(rawSvg({}), 'WindowArrowUp16Filled');
export default WindowArrowUp16Filled;
      