import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.83 1a.5.5 0 000 1H6v1H5a2 2 0 00-2 2v7c0 1.1.9 2 2 2v.5a.5.5 0 001 0V14h4v.5a.5.5 0 001 0V14a2 2 0 002-2V5a2 2 0 00-2-2h-1V2h.17a.5.5 0 000-1H5.83zM7 3V2h2v1H7zM5 6.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const Luggage16Filled = wrapIcon(rawSvg({}), 'Luggage16Filled');
export default Luggage16Filled;
      