import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2a.5.5 0 00-.5.5v.54c-1.7.24-3 1.7-3 3.46v.13c0 1.43.84 2.73 2.14 3.31l.86.38v5.62a2.5 2.5 0 01-2-2.45v-.99a.5.5 0 10-1 0v.99a3.5 3.5 0 003 3.46v.55a.5.5 0 001 0v-.55c1.7-.24 3-1.7 3-3.46v-.12c0-1.43-.84-2.72-2.14-3.3L6 9.66V4.06A2.5 2.5 0 018 6.5v1a.5.5 0 001 0v-1a3.5 3.5 0 00-3-3.46V2.5a.5.5 0 00-.5-.5zM3 6.5c0-1.2.86-2.22 2-2.45v5.18l-.45-.2A2.63 2.63 0 013 6.63V6.5zm3 9.44v-5.17l.45.2A2.62 2.62 0 018 13.37v.12a2.5 2.5 0 01-2 2.45z" fill={primaryFill} /><path d="M12 10c0-.34.02-.68.06-1h1.44a.5.5 0 100-1h-1.26c.21-.89.57-1.67 1.01-2.3.77-1.1 1.78-1.7 2.85-1.7.39 0 .81.11 1.12.31a.5.5 0 10.55-.84A3.15 3.15 0 0016.1 3c-1.48 0-2.76.85-3.66 2.12-.57.8-1 1.79-1.23 2.88h-.71a.5.5 0 100 1h.55a9.7 9.7 0 00-.05 1h-.5a.5.5 0 000 1h.55c.16 1.5.65 2.84 1.39 3.88A4.55 4.55 0 0016.1 17c.54 0 1.17-.13 1.68-.48a.5.5 0 00-.56-.82c-.3.2-.72.3-1.12.3-1.07 0-2.08-.6-2.85-1.7a7.19 7.19 0 01-1.2-3.3h1.45a.5.5 0 000-1H12z" fill={primaryFill} /></svg>;
}

const CurrencyDollarEuroRegular = wrapIcon(rawSvg({}), 'CurrencyDollarEuroRegular');
export default CurrencyDollarEuroRegular;
      