import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.8 13.9a1 1 0 01-.78-1.62l3.81-4.72a1.5 1.5 0 012.34 0l3.81 4.72a1 1 0 01-.78 1.63H5.8z" fill={primaryFill} /></svg>;
}

const CaretUpFilled = wrapIcon(rawSvg({}), 'CaretUpFilled');
export default CaretUpFilled;
      