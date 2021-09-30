import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.75a7.25 7.25 0 107.2 6.4c-.07-.58.36-1.15.95-1.15.52 0 .97.36 1.03.87a9.25 9.25 0 11-3.43-6.12v-.5a1 1 0 112 0v2.7l.03.05h-.03v.25a1 1 0 01-1 1h-3a1 1 0 110-2h.67A7.22 7.22 0 0012 4.75z" fill={primaryFill} /></svg>;
}

const ArrowClockwise24Filled = wrapIcon(rawSvg({}), 'ArrowClockwise24Filled');
export default ArrowClockwise24Filled;
      