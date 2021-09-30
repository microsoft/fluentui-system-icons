import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.96 11a1 1 0 01-.82-1.57l2.63-3.79a1.5 1.5 0 012.46 0l2.63 3.79a1 1 0 01-.82 1.57H4.96z" fill={primaryFill} /></svg>;
}

const CaretUp16Filled = wrapIcon(rawSvg({}), 'CaretUp16Filled');
export default CaretUp16Filled;
      