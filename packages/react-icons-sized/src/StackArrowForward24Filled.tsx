import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm1.85-8.35a.5.5 0 00-.7.7l.64.65h-2.04A3.25 3.25 0 0014 8.25v.25a.5.5 0 001 0v-.25C15 7.01 16 6 17.25 6h2.04l-.64.65a.5.5 0 00.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5zM4 4h7.5a6.5 6.5 0 005.5 8.98V13a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm14 8.98a6.47 6.47 0 001.5-.3v.82a4 4 0 01-4 4h-9A2 2 0 014.56 16H15.5a2.5 2.5 0 002.5-2.5v-.52zm4-1.79c-.44.43-.95.8-1.5 1.08v1.98c0 2.35-1.9 4.25-4.25 4.25H7.06A2 2 0 009 20h7.25A5.75 5.75 0 0022 14.25v-3.06z" fill={primaryFill} /></svg>;
}

const StackArrowForward24Filled = wrapIcon(rawSvg({}), 'StackArrowForward24Filled');
export default StackArrowForward24Filled;
      