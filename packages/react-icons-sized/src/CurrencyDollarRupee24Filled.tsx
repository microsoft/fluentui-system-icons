import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3v.11A4.5 4.5 0 0111 7.5v.86a1 1 0 11-2 0V7.5a2.5 2.5 0 00-1.5-2.3v6.16l.7.34c1.71.8 2.8 2.52 2.8 4.4v.38a4.5 4.5 0 01-3.5 4.39v.12a1 1 0 01-2 0v-.12a4.5 4.5 0 01-3.5-4.4v-.84a1 1 0 112 0v.85c0 1.02.62 1.9 1.5 2.3v-6.15l-.7-.33A4.88 4.88 0 012 7.88V7.5a4.5 4.5 0 013.5-4.39V3a1 1 0 012 0zm-2 2.2A2.5 2.5 0 004 7.5v.38c0 1.06.58 2.03 1.5 2.53v-5.2zm2 8.38v5.2a2.5 2.5 0 001.5-2.3v-.37c0-1.06-.58-2.03-1.5-2.53z" fill={primaryFill} /><path d="M13 3a1 1 0 000 2h2.5c.82 0 1.54.4 2 1H13a1 1 0 100 2h4.95a2.5 2.5 0 01-2.45 2H13a1 1 0 00-.82 1.57l7 10a1 1 0 001.64-1.14L14.92 12h.58a4.5 4.5 0 004.47-4H21a1 1 0 100-2h-1.26c-.12-.36-.3-.7-.5-1H21a1 1 0 100-2h-8z" fill={primaryFill} /></svg>;
}

const CurrencyDollarRupee24Filled = wrapIcon(rawSvg({}), 'CurrencyDollarRupee24Filled');
export default CurrencyDollarRupee24Filled;
      