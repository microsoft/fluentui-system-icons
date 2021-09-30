import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.54 1.8a1 1 0 011.42 0l2.5 2.5a1 1 0 010 1.4l-2.5 2.5a1 1 0 11-1.42-1.4l.76-.77a7 7 0 107.65 7.85 1 1 0 111.98.24 9 9 0 11-9.57-10.1l-.82-.81a1 1 0 010-1.42z" fill={primaryFill} /><path d="M16.2 9.8a1 1 0 010 1.4l-4.5 4.5a1 1 0 01-1.4 0l-2-2a1 1 0 111.4-1.4l1.3 1.29 3.8-3.8a1 1 0 011.4 0z" fill={primaryFill} /></svg>;
}

const ApprovalsApp24Filled = wrapIcon(rawSvg({}), 'ApprovalsApp24Filled');
export default ApprovalsApp24Filled;
      