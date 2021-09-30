import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M32.06 8.19a1.5 1.5 0 010 2.12L18.62 23.75l13.44 13.44a1.5 1.5 0 01-2.12 2.12l-14.5-14.5a1.5 1.5 0 010-2.12l14.5-14.5a1.5 1.5 0 012.12 0z" fill={primaryFill} /></svg>;
}

const ChevronLeft48Filled = wrapIcon(rawSvg({}), 'ChevronLeft48Filled');
export default ChevronLeft48Filled;
      