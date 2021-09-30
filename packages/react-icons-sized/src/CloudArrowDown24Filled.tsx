import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 7.75a5.75 5.75 0 0111.32 0h.09a4 4 0 013.96 4.55 6.49 6.49 0 00-11.42 3.45H6a4 4 0 010-8h.09zM22 16.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6-3a.5.5 0 011 0v4.8l1.65-1.65a.5.5 0 01.7.7l-2.5 2.5a.5.5 0 01-.7 0l-2.5-2.5a.5.5 0 01.7-.7L16 18.29V13.5z" fill={primaryFill} /></svg>;
}

const CloudArrowDown24Filled = wrapIcon(rawSvg({}), 'CloudArrowDown24Filled');
export default CloudArrowDown24Filled;
      