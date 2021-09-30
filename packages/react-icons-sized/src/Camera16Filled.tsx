import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 8a2 2 0 11-4 0 2 2 0 014 0zM5.28 2.83c.25-.5.77-.83 1.34-.83h2.76c.57 0 1.09.32 1.34.83L11.31 4H12a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h.7l.58-1.17zM11 8a3 3 0 10-6 0 3 3 0 006 0z" fill={primaryFill} /></svg>;
}

const Camera16Filled = wrapIcon(rawSvg({}), 'Camera16Filled');
export default Camera16Filled;
      