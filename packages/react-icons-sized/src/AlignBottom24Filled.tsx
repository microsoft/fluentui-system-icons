import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 21a.75.75 0 010-1.5h18.5a.75.75 0 010 1.5H2.75zM4 15.75C4 16.99 5 18 6.25 18h2.5C9.99 18 11 17 11 15.75V5.25C11 4.01 10 3 8.75 3h-2.5C5.01 3 4 4 4 5.25v10.5zm9 0c0 1.24 1 2.25 2.25 2.25h2.5c1.24 0 2.25-1 2.25-2.25v-7c0-1.24-1-2.25-2.25-2.25h-2.5c-1.24 0-2.25 1-2.25 2.25v7z" fill={primaryFill} /></svg>;
}

const AlignBottom24Filled = wrapIcon(rawSvg({}), 'AlignBottom24Filled');
export default AlignBottom24Filled;
      