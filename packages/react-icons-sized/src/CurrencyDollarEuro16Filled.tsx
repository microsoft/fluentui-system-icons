import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2a.75.75 0 00-.75.75v.35c-1.15.33-2 1.4-2 2.65v.04c0 1.1.65 2.1 1.67 2.55L4 8.5v2.75c-.3-.23-.5-.6-.5-1v-.6a.75.75 0 00-1.5 0v.6c0 1.26.85 2.32 2 2.65v.36a.75.75 0 001.5 0v-.37a2.78 2.78 0 00.34-5.22L5.5 7.5V4.75c.3.23.5.6.5 1v.62a.75.75 0 101.5 0v-.62c0-1.26-.84-2.32-2-2.65v-.35A.75.75 0 004.75 2zM3.5 5.75c0-.4.2-.77.5-1V6.8c-.31-.24-.5-.62-.5-1.02v-.04zm2 5.48V9.2c.31.24.5.62.5 1.03 0 .41-.2.78-.5 1.01z" fill={primaryFill} /><path d="M10.5 8h.75a.75.75 0 000-1.5h-.55c.11-.42.28-.8.47-1.1.4-.65.87-.9 1.26-.9.14 0 .28.05.38.11a.75.75 0 10.88-1.2c-.38-.28-.84-.41-1.26-.41-1.09 0-1.96.7-2.53 1.6-.34.54-.6 1.19-.75 1.9h-.4a.75.75 0 000 1.5H9c0 .34.02.67.07 1h-.32a.75.75 0 100 1.5h.7c.12.32.28.63.45.9.57.9 1.44 1.6 2.53 1.6.4 0 .88-.1 1.28-.41a.75.75 0 10-.92-1.19c-.07.05-.2.1-.36.1-.39 0-.86-.25-1.26-.9a3.33 3.33 0 01-.06-.1h.14a.75.75 0 100-1.5h-.67a5.86 5.86 0 01-.08-1z" fill={primaryFill} /></svg>;
}

const CurrencyDollarEuro16Filled = wrapIcon(rawSvg({}), 'CurrencyDollarEuro16Filled');
export default CurrencyDollarEuro16Filled;
      