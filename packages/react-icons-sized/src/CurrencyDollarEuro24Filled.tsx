import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2a1 1 0 00-1 1v.11A4.5 4.5 0 002 7.5v.38c0 1.9 1.09 3.61 2.8 4.42l.7.33v6.14a2.5 2.5 0 01-1.5-2.3v-.84a1 1 0 10-2 0v.85a4.5 4.5 0 003.5 4.39v.12a1 1 0 002 0v-.12a4.5 4.5 0 003.5-4.4v-.36c0-1.89-1.09-3.6-2.8-4.41l-.7-.34V5.21A2.5 2.5 0 019 7.5v.86a1 1 0 102 0V7.5a4.5 4.5 0 00-3.5-4.39V3a1 1 0 00-1-1zM4 7.5c0-1.03.62-1.9 1.5-2.3v5.21A2.88 2.88 0 014 7.88V7.5zm3.5 11.27v-5.19c.92.5 1.5 1.47 1.5 2.53v.37a2.5 2.5 0 01-1.5 2.3z" fill={primaryFill} /><path d="M15 12c0-.33.01-.66.04-.98H16a1 1 0 000-2h-.58c.24-.8.58-1.52.98-2.12.85-1.27 1.92-1.9 2.96-1.9.38 0 .79.12 1.07.31a1 1 0 101.13-1.65 3.97 3.97 0 00-2.2-.66c-1.91 0-3.53 1.16-4.62 2.79-.62.92-1.1 2.02-1.39 3.23H12a1 1 0 100 2h1.04c-.03.33-.04.65-.04.98v.03h-1a1 1 0 100 2h1.16c.25 1.59.8 3.03 1.58 4.18 1.1 1.63 2.7 2.79 4.62 2.79.7 0 1.54-.17 2.23-.67a1 1 0 00-1.18-1.62c-.25.18-.64.29-1.05.29-1.04 0-2.1-.63-2.96-1.9a8.4 8.4 0 01-1.21-3.07H16a1 1 0 000-2h-1V12z" fill={primaryFill} /></svg>;
}

const CurrencyDollarEuro24Filled = wrapIcon(rawSvg({}), 'CurrencyDollarEuro24Filled');
export default CurrencyDollarEuro24Filled;
      