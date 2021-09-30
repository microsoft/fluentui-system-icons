import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a2 2 0 114 0v10a2 2 0 11-4 0V3zM1 9a2 2 0 114 0v4a2 2 0 11-4 0V9zm10-2a2 2 0 114 0v6a2 2 0 11-4 0V7z" fill={primaryFill} /></svg>;
}

const Poll16Filled = wrapIcon(rawSvg({}), 'Poll16Filled');
export default Poll16Filled;
      