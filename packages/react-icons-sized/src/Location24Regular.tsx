import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.84 4.57a8.7 8.7 0 1112.32 12.31l-1.19 1.18-3.4 3.3c-.88.85-2.26.85-3.13 0l-3.5-3.39-1.1-1.09a8.7 8.7 0 010-12.31zM17.1 5.63a7.2 7.2 0 10-10.2 10.2l1.5 1.46 3.08 3c.29.28.75.28 1.04 0l3.4-3.3 1.18-1.17a7.2 7.2 0 000-10.2zM12 8a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const Location24Regular = wrapIcon(rawSvg({}), 'Location24Regular');
export default Location24Regular;
      