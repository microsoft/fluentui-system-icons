import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3c.41 0 .75.34.75.75v16.5a.75.75 0 01-1.5 0V3.75c0-.41.34-.75.75-.75zm16.5 0c.41 0 .75.34.75.75v16.5a.75.75 0 01-1.5 0V3.75c0-.41.34-.75.75-.75zm-10 2C9.01 5 8 6 8 7.25v9.5C8 17.99 9 19 10.25 19h3.5c1.24 0 2.25-1 2.25-2.25v-9.5C16 6.01 15 5 13.75 5h-3.5z" fill={primaryFill} /></svg>;
}

const CenterHorizontal24Filled = wrapIcon(rawSvg({}), 'CenterHorizontal24Filled');
export default CenterHorizontal24Filled;
      