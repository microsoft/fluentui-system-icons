import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31.88 8.37c.5.48.5 1.28 0 1.76L18.02 24l13.86 13.87a1.25 1.25 0 01-1.76 1.76L15.37 24.88a1.25 1.25 0 010-1.76L30.12 8.37a1.25 1.25 0 011.76 0z" fill={primaryFill} /></svg>;
}

const ChevronLeft48Regular = wrapIcon(rawSvg({}), 'ChevronLeft48Regular');
export default ChevronLeft48Regular;
      