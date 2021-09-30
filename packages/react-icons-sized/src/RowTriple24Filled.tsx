import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 2.02C4.78 2.02 4 2.8 4 3.77v2.5c0 .97.78 1.75 1.75 1.75h12.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75H5.75z" fill={primaryFill} /><path d="M5.75 9.02C4.78 9.02 4 9.8 4 10.77v2.5c0 .97.78 1.75 1.75 1.75h12.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75H5.75z" fill={primaryFill} /><path d="M5.75 16.02c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h12.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75H5.75z" fill={primaryFill} /></svg>;
}

const RowTriple24Filled = wrapIcon(rawSvg({}), 'RowTriple24Filled');
export default RowTriple24Filled;
      