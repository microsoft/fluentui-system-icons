import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3C6.99 3 8 4 8 5.25v13.5a2.25 2.25 0 11-4.5 0V5.25C3.5 4 4.5 3 5.75 3zm6.5 4c1.24 0 2.25 1 2.25 2.25v9.5a2.25 2.25 0 11-4.5 0v-9.5C10 8 11 7 12.25 7zm6.5 4c1.24 0 2.25 1 2.25 2.25v5.5a2.25 2.25 0 11-4.5 0v-5.5c0-1.24 1-2.25 2.25-2.25z" fill={primaryFill} /></svg>;
}

const DataBarVertical24Filled = wrapIcon(rawSvg({}), 'DataBarVertical24Filled');
export default DataBarVertical24Filled;
      