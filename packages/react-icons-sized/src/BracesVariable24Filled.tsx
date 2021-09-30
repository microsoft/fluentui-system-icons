import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3 1 1 0 010 2 1 1 0 00-1 1v3.94A3 3 0 014.18 12 3 3 0 015 14.06V18a1 1 0 001 1 1 1 0 110 2 3 3 0 01-3-3v-3.94a1 1 0 00-.76-.97l-.48-.12a1 1 0 010-1.94l.48-.12A1 1 0 003 9.94V6zm18 0a3 3 0 00-3-3 1 1 0 100 2 1 1 0 011 1v3.94a3 3 0 00.82 2.06 3 3 0 00-.82 2.06V18a1 1 0 01-1 1 1 1 0 100 2 3 3 0 003-3v-3.94a1 1 0 01.76-.97l.48-.12a1 1 0 000-1.94l-.48-.12a1 1 0 01-.76-.97V6zm-11.71.89A1 1 0 107.7 8.1L10.73 12l-3.02 3.89A1 1 0 109.3 17.1L12 13.63l2.71 3.48a1 1 0 001.58-1.22L13.27 12l3.02-3.89A1 1 0 0014.7 6.9L12 10.37 9.29 6.9z" fill={primaryFill} /></svg>;
}

const BracesVariable24Filled = wrapIcon(rawSvg({}), 'BracesVariable24Filled');
export default BracesVariable24Filled;
      