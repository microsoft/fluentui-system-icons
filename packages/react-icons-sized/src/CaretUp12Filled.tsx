import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.08 7.38A1 1 0 004 8h4a1 1 0 00.7-1.7l-2-2a1 1 0 00-1.4 0l-2 2a1 1 0 00-.22 1.08z" fill={primaryFill} /></svg>;
}

const CaretUp12Filled = wrapIcon(rawSvg({}), 'CaretUp12Filled');
export default CaretUp12Filled;
      