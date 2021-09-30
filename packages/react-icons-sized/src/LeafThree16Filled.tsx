import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1a4 4 0 00-3.48 2.03 5 5 0 013.6 2.14c.44-.11.9-.17 1.38-.17H13V2.15C13 1.5 12.49 1 11.85 1H9z" fill={primaryFill} /><path d="M13.76 6c.68 0 1.24.56 1.24 1.24v3.26a4.5 4.5 0 01-7.3 3.52l-.85.83a.5.5 0 01-.7-.7l.83-.84a4.49 4.49 0 012.64-7.22c.28-.06.58-.09.88-.09h3.26zM7.7 12.6c.2.26.44.5.7.7l2.45-2.45a.5.5 0 00-.7-.7L7.7 12.6z" fill={primaryFill} /><path d="M8.15 5.53a5.52 5.52 0 00-2.51 2.4l-.79-.78a.5.5 0 10-.7.7l1.08 1.08A5.5 5.5 0 005.2 12 4 4 0 011 8V5.15C1 4.5 1.51 4 2.15 4H5a4 4 0 013.15 1.53z" fill={primaryFill} /></svg>;
}

const LeafThree16Filled = wrapIcon(rawSvg({}), 'LeafThree16Filled');
export default LeafThree16Filled;
      