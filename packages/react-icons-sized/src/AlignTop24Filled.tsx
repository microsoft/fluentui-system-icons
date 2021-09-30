import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75zM4 8.25C4 7.01 5 6 6.25 6h2.5C9.99 6 11 7 11 8.25v10.5C11 19.99 10 21 8.75 21h-2.5C5.01 21 4 20 4 18.75V8.25zm9 0C13 7.01 14 6 15.25 6h2.5C18.99 6 20 7 20 8.25v7c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25v-7z" fill={primaryFill} /></svg>;
}

const AlignTop24Filled = wrapIcon(rawSvg({}), 'AlignTop24Filled');
export default AlignTop24Filled;
      