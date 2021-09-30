import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 9H9V6.75c0-.66-.79-1-1.26-.54l-5.5 5.25a.75.75 0 000 1.08l5.5 5.25.08.07a.75.75 0 001.19-.61V15h6v2.25c0 .66.78 1 1.26.54l5.5-5.25c.3-.3.3-.79 0-1.08l-5.5-5.25a.75.75 0 00-1.27.54V9z" fill={primaryFill} /></svg>;
}

const ArrowsBidirectional24Filled = wrapIcon(rawSvg({}), 'ArrowsBidirectional24Filled');
export default ArrowsBidirectional24Filled;
      