import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 4.25A5.75 5.75 0 006.09 9H6a4 4 0 000 8h3.17c-.31-.65-.2-1.45.34-1.99l2.5-2.5a1.75 1.75 0 012.82 1.99h2.34a1.75 1.75 0 012.82-1.99l1.4 1.4A4 4 0 0017.5 9h-.09a5.75 5.75 0 00-5.66-4.75zm2.03 10.03a.75.75 0 10-1.06-1.06l-2.5 2.5c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 101.06-1.06L12.56 17h6.88l-1.22 1.22a.75.75 0 101.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 10-1.06 1.06l1.22 1.22h-6.88l1.22-1.22z" fill={primaryFill} /></svg>;
}

const CloudSwap24Filled = wrapIcon(rawSvg({}), 'CloudSwap24Filled');
export default CloudSwap24Filled;
      