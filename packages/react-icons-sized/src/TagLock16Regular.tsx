import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.27 4.66c.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08a.77.77 0 00-1.1 0c-.3.3-.3.78 0 1.08zM1.54 6.33a2 2 0 000 2.83l3.3 3.29c.59.58 1.44.73 2.16.45v-1.18l-.02.02c-.4.4-1.03.4-1.42 0L2.25 8.45a1 1 0 010-1.41L7 2.3c.18-.19.44-.3.7-.3L10.98 2a1 1 0 011.01 1l-.02 2.04c.37.05.7.18 1 .35L13 3.02A2 2 0 0010.97 1l-3.26.01c-.53 0-1.04.22-1.41.59L1.54 6.33zM9.5 8v1H9a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5V8a2 2 0 10-4 0zm1 1V8a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const TagLock16Regular = wrapIcon(rawSvg({}), 'TagLock16Regular');
export default TagLock16Regular;
      