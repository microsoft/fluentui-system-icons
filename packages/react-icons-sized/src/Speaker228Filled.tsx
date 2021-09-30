import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.4 3.9c.8-.75 2.1-.18 2.1.91v18.37c0 1.1-1.3 1.66-2.1.92l-4.94-4.63c-.33-.3-.75-.47-1.2-.47H5.25A3.25 3.25 0 012 15.75v-3.5c0-1.79 1.46-3.24 3.25-3.24h3.01c.45 0 .87-.17 1.2-.48l4.93-4.63z" fill={primaryFill} /><path d="M21.64 5.18a.75.75 0 011.06.07 13.2 13.2 0 010 17.5.75.75 0 11-1.12-1 11.7 11.7 0 000-15.5.75.75 0 01.06-1.07z" fill={primaryFill} /><path d="M20.35 8.3a.75.75 0 10-1.2.9 7.96 7.96 0 010 9.6.75.75 0 101.2.9 9.46 9.46 0 000-11.4z" fill={primaryFill} /></svg>;
}

const Speaker228Filled = wrapIcon(rawSvg({}), 'Speaker228Filled');
export default Speaker228Filled;
      