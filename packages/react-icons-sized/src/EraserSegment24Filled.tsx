import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.65 2.64a2.25 2.25 0 013.2.02l4.9 5c.86.89.86 2.3 0 3.17l-8.59 8.67h3.95a2.5 2.5 0 110 1.5H9.85c-.6.03-1.22-.18-1.7-.64l-5.09-5.01c-.9-.88-.9-2.32 0-3.2l9.6-9.51zM9.8 19.5a.75.75 0 00.47-.22l1.47-1.48-6.1-6.1L4.1 13.2c-.3.3-.3.78 0 1.07l5.1 5c.15.15.35.23.54.22h.05z" fill={primaryFill} /></svg>;
}

const EraserSegment24Filled = wrapIcon(rawSvg({}), 'EraserSegment24Filled');
export default EraserSegment24Filled;
      