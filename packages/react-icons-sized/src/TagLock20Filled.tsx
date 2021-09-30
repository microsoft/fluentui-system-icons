import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4.03a2 2 0 00-1.98-2L11.12 2a2 2 0 00-1.42.59L3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 002.03.49V14a2 2 0 011.5-1.94V12a3 3 0 015.68-1.35l.25-.25A2 2 0 0018 8.98V4.03zM14 7a1 1 0 110-2 1 1 0 010 2zm-1.5 5v1H12a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const TagLock20Filled = wrapIcon(rawSvg({}), 'TagLock20Filled');
export default TagLock20Filled;
      