import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a2 2 0 00-2 2v10a2 2 0 104 0V3a2 2 0 00-2-2zm1 2v10a1 1 0 11-2 0V3a1 1 0 012 0zM3 7a2 2 0 00-2 2v4a2 2 0 104 0V9a2 2 0 00-2-2zm1 6a1 1 0 11-2 0V9a1 1 0 012 0v4zm7-6a2 2 0 114 0v6a2 2 0 11-4 0V7zm3 0a1 1 0 10-2 0v6a1 1 0 102 0V7z" fill={primaryFill} /></svg>;
}

const Poll16Regular = wrapIcon(rawSvg({}), 'Poll16Regular');
export default Poll16Regular;
      