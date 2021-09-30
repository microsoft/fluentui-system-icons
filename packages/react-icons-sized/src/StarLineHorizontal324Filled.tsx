import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l1.69 3.43a2.25 2.25 0 00-.68 4.22 2.25 2.25 0 000 4 2.25 2.25 0 00-.77 3.35l-6.17 3.24a1.35 1.35 0 01-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78z" fill={primaryFill} /><path d="M14.5 16.75c0-.41.34-.75.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M14.5 12.75c0-.41.34-.75.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M14.5 8.75c0-.41.34-.75.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const StarLineHorizontal324Filled = wrapIcon(rawSvg({}), 'StarLineHorizontal324Filled');
export default StarLineHorizontal324Filled;
      