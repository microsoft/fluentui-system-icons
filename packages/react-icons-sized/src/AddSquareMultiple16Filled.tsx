import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm4.5 2.5h-2a.5.5 0 000 1h2v2a.5.5 0 001 0v-2h2a.5.5 0 100-1h-2v-2a.5.5 0 00-1 0v2zm4 6.5a2.5 2.5 0 002.5-2.5V3.27c.6.34 1 .99 1 1.73v5.5a3.5 3.5 0 01-3.5 3.5H5a2 2 0 01-1.73-1h7.23z" fill={primaryFill} /></svg>;
}

const AddSquareMultiple16Filled = wrapIcon(rawSvg({}), 'AddSquareMultiple16Filled');
export default AddSquareMultiple16Filled;
      