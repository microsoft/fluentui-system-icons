import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h5a2 2 0 012 2v1h1a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-1H4a2 2 0 01-2-2V4zm8 0a1 1 0 00-1-1H4a1 1 0 00-1 1v5a1 1 0 001 1h1V7c0-1.1.9-2 2-2h3V4zm-4 7v1a1 1 0 001 1h5a1 1 0 001-1V7a1 1 0 00-1-1h-1v3a2 2 0 01-2 2H6z" fill={primaryFill} /></svg>;
}

const ShapeIntersect16Filled = wrapIcon(rawSvg({}), 'ShapeIntersect16Filled');
export default ShapeIntersect16Filled;
      