import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V7h-1V4.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V8h5.5c-.31.42-.5.94-.5 1.5v6c0 .56.19 1.08.5 1.5h-7A1.5 1.5 0 013 15.5V10c0-1.1.9-2 2-2V4.5zm1.25 6.13a.62.62 0 10-1.25 0 .62.62 0 001.25 0zm0 2.24a.62.62 0 10-1.25 0 .62.62 0 001.25 0zm1.63-.5a.62.62 0 100 1.25.62.62 0 000-1.24zm.62-1.74a.62.62 0 10-1.25 0 .62.62 0 001.25 0zm5-2.63c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-2z" fill={primaryFill} /></svg>;
}

const Fax20Filled = wrapIcon(rawSvg({}), 'Fax20Filled');
export default Fax20Filled;
      