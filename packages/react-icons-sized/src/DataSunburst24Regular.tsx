import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 4.25a.82.82 0 01-.5-.74c0-.52.5-.9.99-.68 2.31 1 4.18 2.87 5.18 5.18.21.48-.16.99-.68.99-.32 0-.6-.2-.74-.5a8.53 8.53 0 00-4.26-4.25z" fill={primaryFill} /><path d="M9 3.51c0-.52-.5-.9-.99-.68C5.7 3.83 3.83 5.7 2.83 8c-.21.48.16.99.68.99.32 0 .6-.2.74-.5A8.53 8.53 0 018.5 4.26c.29-.13.49-.42.49-.74z" fill={primaryFill} /><path d="M15.5 19.75c-.3.13-.5.42-.5.74 0 .52.5.9.99.68 2.31-1 4.18-2.87 5.18-5.18.21-.48-.16-.99-.68-.99-.32 0-.6.2-.74.5a8.53 8.53 0 01-4.26 4.25z" fill={primaryFill} /><path d="M3.51 15c.32 0 .6.2.74.5a8.53 8.53 0 004.26 4.25c.29.13.49.42.49.74 0 .52-.5.9-.99.68-2.31-1-4.18-2.87-5.18-5.18-.21-.48.16-.99.68-.99z" fill={primaryFill} /><path d="M12 6.5c-.2 0-.38.01-.57.03a.75.75 0 11-.16-1.5 7 7 0 017.55 5.4.75.75 0 11-1.46.35A5.5 5.5 0 0012 6.5z" fill={primaryFill} /><path d="M9.12 6.4c.23.34.14.81-.2 1.04a5.5 5.5 0 00-1.48 7.64.75.75 0 01-1.24.84A6.97 6.97 0 018.08 6.2a.75.75 0 011.04.2z" fill={primaryFill} /><path d="M18.23 12.9c.4.11.64.52.53.92A7 7 0 018.75 18.2a.75.75 0 01.7-1.33 5.5 5.5 0 007.86-3.44c.1-.4.52-.63.92-.53z" fill={primaryFill} /><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm-2.5 4a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={primaryFill} /></svg>;
}

const DataSunburst24Regular = wrapIcon(rawSvg({}), 'DataSunburst24Regular');
export default DataSunburst24Regular;
      