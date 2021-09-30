import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2v2.5C5 5.33 5.67 6 6.5 6h2c.83 0 1.5-.67 1.5-1.5V2h.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0114 5.62V12a2 2 0 01-2 2V9.5c0-.83-.67-1.5-1.5-1.5h-5C4.67 8 4 8.67 4 9.5V14a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1zm1 0v2.5c0 .28.22.5.5.5h2a.5.5 0 00.5-.5V2H6zM5 14h6V9.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V14z" fill={primaryFill} /></svg>;
}

const Save16Filled = wrapIcon(rawSvg({}), 'Save16Filled');
export default Save16Filled;
      