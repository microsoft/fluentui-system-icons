import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.54 7.33L7.3 2.6c.37-.37.88-.58 1.41-.59L11.97 2A2 2 0 0114 4.01l-.03 3.38a2 2 0 01-.59 1.4L8.7 13.44c-.78.78-2.06.78-2.84 0l-3.31-3.28a2 2 0 010-2.83zm7.72-1.67c.3.3.8.3 1.1 0 .3-.3.3-.78 0-1.08a.77.77 0 00-1.1 0c-.3.3-.3.78 0 1.08z" fill={primaryFill} /></svg>;
}

const Tag16Filled = wrapIcon(rawSvg({}), 'Tag16Filled');
export default Tag16Filled;
      