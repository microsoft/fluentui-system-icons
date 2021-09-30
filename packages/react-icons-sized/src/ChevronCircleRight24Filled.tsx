import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm8.44 4.53c.3.3.77.3 1.06 0l4-4c.3-.3.3-.77 0-1.06l-4-4a.75.75 0 00-1.06 1.06L13.9 12l-3.47 3.47c-.3.3-.3.77 0 1.06z" fill={primaryFill} /></svg>;
}

const ChevronCircleRight24Filled = wrapIcon(rawSvg({}), 'ChevronCircleRight24Filled');
export default ChevronCircleRight24Filled;
      