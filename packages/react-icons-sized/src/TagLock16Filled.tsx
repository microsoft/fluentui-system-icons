import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.54 6.33L6.3 1.6c.37-.37.88-.58 1.41-.59L10.97 1A2 2 0 0113 3.01l-.02 2.38A3 3 0 008.5 8v.06A2 2 0 007 10v2.9c-.72.27-1.57.12-2.15-.46L1.54 9.16a2 2 0 010-2.83zm7.72-1.67c.3.3.8.3 1.1 0 .3-.3.3-.78 0-1.08a.77.77 0 00-1.1 0c-.3.3-.3.78 0 1.08zM9.5 8v1H9a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5V8a2 2 0 10-4 0zm1 1V8a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const TagLock16Filled = wrapIcon(rawSvg({}), 'TagLock16Filled');
export default TagLock16Filled;
      