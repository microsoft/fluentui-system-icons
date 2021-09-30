import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.7 7.46a.75.75 0 00-1.37-.05L8.79 10.5H7.75a.75.75 0 000 1.5h1.5c.28 0 .54-.16.67-.41l1.02-2.05 2.12 5a.75.75 0 001.34.09L15.93 12h.82a.75.75 0 000-1.5H15.5a.75.75 0 00-.65.37l-1 1.7-2.16-5.11z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1V18z" fill={primaryFill} /></svg>;
}

const BookPulse24Regular = wrapIcon(rawSvg({}), 'BookPulse24Regular');
export default BookPulse24Regular;
      