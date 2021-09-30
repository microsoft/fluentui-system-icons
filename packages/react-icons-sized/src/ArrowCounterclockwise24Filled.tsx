import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.75a7.25 7.25 0 11-7.2 6.4c.07-.58-.36-1.15-.95-1.15-.52 0-.97.36-1.03.87a9.25 9.25 0 103.43-6.12v-.5a1 1 0 00-2 0v2.7L4.22 7h.03v.25a1 1 0 001 1h3a1 1 0 000-2h-.67A7.22 7.22 0 0112 4.75z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise24Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwise24Filled');
export default ArrowCounterclockwise24Filled;
      