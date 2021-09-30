import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.14 9.43A1 1 0 004.96 11h6.08a1 1 0 00.82-1.57L9.23 5.64a1.5 1.5 0 00-2.46 0L4.14 9.43zm.82.57L7.59 6.2a.5.5 0 01.82 0L11.04 10H4.96z" fill={primaryFill} /></svg>;
}

const CaretUp16Regular = wrapIcon(rawSvg({}), 'CaretUp16Regular');
export default CaretUp16Regular;
      