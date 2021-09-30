import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 6A2.5 2.5 0 0110 8.34v.2a13.01 13.01 0 01-3.7 9.22.75.75 0 11-1.1-1.02 11.55 11.55 0 003.08-5.86A2.5 2.5 0 117.5 6zm9 0A2.5 2.5 0 0119 8.34v.2a12.99 12.99 0 01-3.7 9.23.75.75 0 11-1.1-1.04 11.51 11.51 0 003.08-5.85A2.5 2.5 0 1116.5 6z" fill={primaryFill} /></svg>;
}

const TextQuote24Filled = wrapIcon(rawSvg({}), 'TextQuote24Filled');
export default TextQuote24Filled;
      