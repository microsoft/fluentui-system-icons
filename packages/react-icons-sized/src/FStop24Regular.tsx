import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 6.53A3.25 3.25 0 0117.46 4l.6.2a.75.75 0 10.49-1.4l-.6-.21a4.75 4.75 0 00-6.23 3.69L11 10.5H6.75a.75.75 0 000 1.5h3.99l-.78 4.58a3.25 3.25 0 01-4.77 2.3l-.08-.04a.75.75 0 00-.72 1.32l.07.04a4.75 4.75 0 006.98-3.36l.82-4.84h3.99a.75.75 0 000-1.5h-3.73l.68-3.97z" fill={primaryFill} /></svg>;
}

const FStop24Regular = wrapIcon(rawSvg({}), 'FStop24Regular');
export default FStop24Regular;
      