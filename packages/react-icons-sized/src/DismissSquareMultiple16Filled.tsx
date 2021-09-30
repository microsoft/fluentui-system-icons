import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H4zm.65 2.65c.2-.2.5-.2.7 0L7 6.29l1.65-1.64a.5.5 0 01.7.7L7.71 7l1.64 1.65a.5.5 0 01-.7.7L7 7.71 5.35 9.35a.5.5 0 01-.7-.7L6.29 7 4.65 5.35a.5.5 0 010-.7zM13 10.5a2.5 2.5 0 01-2.5 2.5H3.27c.34.6.99 1 1.73 1h5.5a3.5 3.5 0 003.5-3.5V5a2 2 0 00-1-1.73v7.23z" fill={primaryFill} /></svg>;
}

const DismissSquareMultiple16Filled = wrapIcon(rawSvg({}), 'DismissSquareMultiple16Filled');
export default DismissSquareMultiple16Filled;
      