import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 14.2a1 1 0 01-1.63.78l-4.72-3.81a1.5 1.5 0 010-2.34l4.72-3.81A1 1 0 0113 5.8v8.4z" fill={primaryFill} /></svg>;
}

const CaretLeftFilled = wrapIcon(rawSvg({}), 'CaretLeftFilled');
export default CaretLeftFilled;
      