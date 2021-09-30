import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.98 3.16a1 1 0 00-1.97-.32L8.15 8H4a1 1 0 000 2h3.82l-.67 4H3a1 1 0 100 2h3.82L6 20.84a1 1 0 101.97.32L8.84 16h2.33c.18-.72.47-1.4.85-2H9.18l.67-4h4.97l-.29 1.71a6.46 6.46 0 012.14-.66l.18-1.06H21a1 1 0 000-2h-3.82l.8-4.83a1 1 0 10-1.97-.32l-.86 5.15h-4.97l.8-4.83z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const NumberSymbolDismiss24Filled = wrapIcon(rawSvg({}), 'NumberSymbolDismiss24Filled');
export default NumberSymbolDismiss24Filled;
      