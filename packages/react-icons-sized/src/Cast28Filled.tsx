import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75C2 5.51 3 4.5 4.25 4.5h19.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25H4.25c-1.24 0-2.25-1-2.25-2.25V6.75zm3.5 4.5c0 .41.34.75.75.75 4 0 7.26 3.24 7.26 7.25a.75.75 0 001.5 0 8.75 8.75 0 00-8.76-8.75.75.75 0 00-.75.75zM6.25 14a.75.75 0 000 1.5A3.75 3.75 0 0110 19.25a.75.75 0 001.5 0c0-2.9-2.35-5.25-5.25-5.25zm.5 6a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const Cast28Filled = wrapIcon(rawSvg({}), 'Cast28Filled');
export default Cast28Filled;
      