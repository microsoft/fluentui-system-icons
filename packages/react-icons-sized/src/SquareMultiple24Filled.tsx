import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.52 5H6c.13-1.68 1.53-3 3.24-3h8A4.75 4.75 0 0122 6.75v8a3.25 3.25 0 01-3 3.24v-1.5c.85-.13 1.5-.86 1.5-1.74v-8c0-1.8-1.46-3.25-3.25-3.25h-8c-.88 0-1.61.65-1.73 1.5zM5.25 6A3.25 3.25 0 002 9.25v9.5C2 20.55 3.46 22 5.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C18 7.45 16.55 6 14.75 6h-9.5z" fill={primaryFill} /></svg>;
}

const SquareMultiple24Filled = wrapIcon(rawSvg({}), 'SquareMultiple24Filled');
export default SquareMultiple24Filled;
      