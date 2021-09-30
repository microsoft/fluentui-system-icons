import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.8 11.27a.75.75 0 00-1.1-1.04l-4.95 5.24V2.75a.75.75 0 00-1.5 0v12.73l-4.96-5.25a.75.75 0 00-1.09 1.04l6.07 6.41a1 1 0 001.45 0l6.07-6.41z" fill={primaryFill} /></svg>;
}

const ArrowDownFilled = wrapIcon(rawSvg({}), 'ArrowDownFilled');
export default ArrowDownFilled;
      