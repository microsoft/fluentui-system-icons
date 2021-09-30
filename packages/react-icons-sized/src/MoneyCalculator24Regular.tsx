import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 7a3 3 0 100 6 3 3 0 000-6zM9 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM2 6.25C2 5.01 3 4 4.25 4h12.5C17.99 4 19 5 19 6.25V11h-1.5V8.5h-.75c-1.24 0-2.25-1-2.25-2.25V5.5h-8v.75c0 1.24-1 2.25-2.25 2.25H3.5v3h.75c1.24 0 2.25 1 2.25 2.25v.75H14V16H4.25C3.01 16 2 15 2 13.75v-7.5zm2.25-.75a.75.75 0 00-.75.75V7h.75c.41 0 .75-.34.75-.75V5.5h-.75zM17.5 7v-.75a.75.75 0 00-.75-.75H16v.75c0 .41.34.75.75.75h.75zm-14 6.75c0 .41.34.75.75.75H5v-.75a.75.75 0 00-.75-.75H3.5v.75zm.9 3.75H14V19H7a3 3 0 01-2.6-1.5zM22 11V9a3 3 0 00-1.5-2.6V11H22zm-5.5 1c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-5zm.5 4.5h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zM16.5 14c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /></svg>;
}

const MoneyCalculator24Regular = wrapIcon(rawSvg({}), 'MoneyCalculator24Regular');
export default MoneyCalculator24Regular;
      