import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 3.5H9V5H7.25A3.25 3.25 0 004 8.25v9a3.25 3.25 0 003 3.24v.76a.75.75 0 001.5 0v-.75h7v.75a.75.75 0 001.5 0v-.76c1.68-.13 3-1.53 3-3.24v-9C20 6.45 18.54 5 16.75 5H15V3.5h.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5zM10.5 5V3.5h3V5h-3zM7.75 9.5h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const Luggage24Filled = wrapIcon(rawSvg({}), 'Luggage24Filled');
export default Luggage24Filled;
      