import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7c0-.28.22-.5.5-.5h2v-2a.5.5 0 011 0v2h2a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2h-2A.5.5 0 014 7zm0-5a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H4zM3 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm7.5 9a2.5 2.5 0 002.5-2.5V3.27c.6.34 1 .99 1 1.73v5.5a3.5 3.5 0 01-3.5 3.5H5a2 2 0 01-1.73-1h7.23z" fill={primaryFill} /></svg>;
}

const AddSquareMultiple16Regular = wrapIcon(rawSvg({}), 'AddSquareMultiple16Regular');
export default AddSquareMultiple16Regular;
      