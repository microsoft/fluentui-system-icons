import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1.5a.5.5 0 00-1 0v9a.5.5 0 001 0v-9zm-5 2C1 2.67 1.67 2 2.5 2H4v8H2.5A1.5 1.5 0 011 8.5v-5zM7 10h1.5c.83 0 1.5-.67 1.5-1.5v-5C10 2.67 9.33 2 8.5 2H7v8z" fill={primaryFill} /></svg>;
}

const SplitVertical12Filled = wrapIcon(rawSvg({}), 'SplitVertical12Filled');
export default SplitVertical12Filled;
      