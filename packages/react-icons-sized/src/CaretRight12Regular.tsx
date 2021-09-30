import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a1 1 0 011.7-.72l2.04 2a1 1 0 010 1.43l-2.04 2a1 1 0 01-1.7-.7V3.99zm3.04 2L5 4v4l2.04-2z" fill={primaryFill} /></svg>;
}

const CaretRight12Regular = wrapIcon(rawSvg({}), 'CaretRight12Regular');
export default CaretRight12Regular;
      