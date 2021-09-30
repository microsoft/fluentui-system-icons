import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1.5a.5.5 0 10-1 0v.84c-.25.06-.49.2-.69.39L1.34 7.71a1.5 1.5 0 00-.03 2.1l3.62 3.8a1.5 1.5 0 002.15.02l5.07-5.07a1.5 1.5 0 000-2.12L8.43 2.73a1.5 1.5 0 00-.43-.3V1.5zM11.3 8H2.45L7 3.46V4.5a.5.5 0 001 0v-.79l3.44 3.44c.2.2.2.5 0 .7l-.15.15z" fill={primaryFill} /><path d="M12.92 10.22a.56.56 0 00-.84 0l-1.15 1.32a2.09 2.09 0 103.14 0l-1.15-1.32z" fill={primaryFill} /></svg>;
}

const PaintBucket16Filled = wrapIcon(rawSvg({}), 'PaintBucket16Filled');
export default PaintBucket16Filled;
      