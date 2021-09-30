import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 5.27c.6.34 1 .99 1 1.73v6a4 4 0 01-4 4H7a2 2 0 01-1.73-1H13a3 3 0 003-3V5.27zM15 5a2 2 0 00-2-2H5a2 2 0 00-2 2v8c0 1.1.9 2 2 2h8a2 2 0 002-2V5zm-3 4a.5.5 0 01-.5.5h-5a.5.5 0 110-1h5c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
}

const SubtractSquareMultiple20Filled = wrapIcon(rawSvg({}), 'SubtractSquareMultiple20Filled');
export default SubtractSquareMultiple20Filled;
      