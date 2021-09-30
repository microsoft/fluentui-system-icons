import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.65 4.65c.2-.2.5-.2.7 0L7 6.29l1.65-1.64a.5.5 0 01.7.7L7.71 7l1.64 1.65a.5.5 0 01-.7.7L7 7.71 5.35 9.35a.5.5 0 01-.7-.7L6.29 7 4.65 5.35a.5.5 0 010-.7zM4 2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H4zM3 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm10-.73c.6.34 1 .99 1 1.73v5.5a3.5 3.5 0 01-3.5 3.5H5a2 2 0 01-1.73-1h7.23a2.5 2.5 0 002.5-2.5V3.27z" fill={primaryFill} /></svg>;
}

const DismissSquareMultiple16Regular = wrapIcon(rawSvg({}), 'DismissSquareMultiple16Regular');
export default DismissSquareMultiple16Regular;
      