import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 3.51c0 .32.2.6.5.74a8.53 8.53 0 014.25 4.26c.13.29.42.49.74.49.52 0 .9-.5.68-.99-1-2.31-2.87-4.18-5.18-5.18-.48-.21-.99.16-.99.68z" fill={primaryFill} /><path d="M8.01 2.83c.48-.21.99.16.99.68 0 .32-.2.6-.5.74A8.53 8.53 0 004.26 8.5c-.13.29-.42.49-.74.49-.52 0-.9-.5-.68-.99C3.83 5.7 5.7 3.83 8 2.83z" fill={primaryFill} /><path d="M15 20.49c0-.32.2-.6.5-.74a8.53 8.53 0 004.25-4.26c.13-.29.42-.49.74-.49.52 0 .9.5.68.99-1 2.31-2.87 4.18-5.18 5.18-.48.21-.99-.16-.99-.68z" fill={primaryFill} /><path d="M4.25 15.5a.82.82 0 00-.74-.5c-.52 0-.9.5-.68.99 1 2.31 2.87 4.18 5.18 5.18.48.21.99-.16.99-.68 0-.32-.2-.6-.5-.74a8.53 8.53 0 01-4.25-4.26z" fill={primaryFill} /><path d="M12 6.5c-.2 0-.38.01-.57.03a.75.75 0 11-.16-1.5 7 7 0 017.55 5.4.75.75 0 11-1.46.35A5.5 5.5 0 0012 6.5z" fill={primaryFill} /><path d="M9.12 6.4c.23.34.14.81-.2 1.04a5.5 5.5 0 00-1.48 7.64.75.75 0 11-1.24.84A6.97 6.97 0 018.08 6.2a.75.75 0 011.04.2z" fill={primaryFill} /><path d="M18.23 12.9c.4.11.64.52.53.92A7 7 0 018.75 18.2a.75.75 0 11.7-1.33 5.5 5.5 0 007.86-3.44c.1-.4.52-.63.92-.53z" fill={primaryFill} /><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const DataSunburst24Filled = wrapIcon(rawSvg({}), 'DataSunburst24Filled');
export default DataSunburst24Filled;
      