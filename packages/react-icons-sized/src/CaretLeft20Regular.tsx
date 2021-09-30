import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.37 14.98A1 1 0 0013 14.2V5.8a1 1 0 00-1.63-.78L6.65 8.83a1.5 1.5 0 000 2.34l4.72 3.81zM12 5.8v8.4L7.28 10.4a.5.5 0 010-.78L12 5.8z" fill={primaryFill} /></svg>;
}

const CaretLeft20Regular = wrapIcon(rawSvg({}), 'CaretLeft20Regular');
export default CaretLeft20Regular;
      