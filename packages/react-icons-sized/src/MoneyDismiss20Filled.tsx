import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.52A5.5 5.5 0 0116 9.2V5.5c0-.83-.67-1.5-1.5-1.5h-11zM6 6a2 2 0 01-2 2H3V7h1a1 1 0 001-1V5h1v1zm3 4.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM3 11v-1h1a2 2 0 012 2v1H5v-1a1 1 0 00-1-1H3zm10-5a1 1 0 001 1h1v1h-1a2 2 0 01-2-2V5h1v1zm-8.91 9h4.93c.03.34.1.68.19 1H5.5a1.5 1.5 0 01-1.41-1zM18 7.5v2.76a5.5 5.5 0 00-1-.66V6.09c.58.2 1 .76 1 1.41zm1 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.8 0l1.15-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15z" fill={primaryFill} /></svg>;
}

const MoneyDismiss20Filled = wrapIcon(rawSvg({}), 'MoneyDismiss20Filled');
export default MoneyDismiss20Filled;
      