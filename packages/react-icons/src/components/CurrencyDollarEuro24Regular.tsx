import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CurrencyDollarEuro24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 2a.75.75 0 00-.75.75v.32A4.25 4.25 0 002 7.25v.54a4.75 4.75 0 002.67 4.27l.83.4v6.92a2.75 2.75 0 01-2-2.65v-.98a.75.75 0 00-1.5 0v.98c0 2.1 1.51 3.83 3.5 4.18v.34a.75.75 0 001.5 0v-.34a4.25 4.25 0 003.5-4.18v-.53a4.75 4.75 0 00-2.67-4.27l-.83-.4V4.6c1.16.33 2 1.4 2 2.65v1a.75.75 0 101.5 0v-1c0-2.1-1.51-3.83-3.5-4.18v-.32A.75.75 0 006.25 2zM3.5 7.25c0-1.26.85-2.32 2-2.65v6.2l-.17-.09A3.25 3.25 0 013.5 7.8v-.54zM7 19.37V13.2l.17.08A3.25 3.25 0 019 16.2v.53c0 1.26-.84 2.32-2 2.64z" fill={primaryFill} /><path d="M14.5 12l.01-.5h1.74a.75.75 0 100-1.5h-1.57a8.8 8.8 0 011.37-3.4c.94-1.36 2.18-2.1 3.45-2.1.47 0 .97.14 1.34.38a.75.75 0 00.82-1.26A4.03 4.03 0 0019.5 3c-1.9 0-3.54 1.1-4.68 2.74A10.39 10.39 0 0013.16 10h-1.4a.75.75 0 10-.01 1.5h1.26a12.65 12.65 0 000 1h-1.26a.75.75 0 000 1.5h1.41c.26 1.62.84 3.1 1.66 4.26C15.96 19.9 17.6 21 19.5 21c.7 0 1.52-.17 2.18-.63a.75.75 0 00-.85-1.23 2.4 2.4 0 01-1.33.36c-1.27 0-2.5-.74-3.45-2.1a8.8 8.8 0 01-1.37-3.4h1.57a.75.75 0 100-1.5H14.5l-.01-.5z" fill={primaryFill} /></svg>;
};

export default CurrencyDollarEuro24Regular;