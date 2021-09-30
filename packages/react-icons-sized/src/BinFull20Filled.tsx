import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 2.93a.5.5 0 10-.5-.86l-12 7A.5.5 0 002 9.5v6A2.5 2.5 0 004.5 18h11a2.5 2.5 0 002.5-2.5v-6a.5.5 0 00-.5-.5H17V6.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5V7H9.5C8.67 7 8 7.67 8 8.5V9H4.35l10.4-6.07zM12 8v1H9v-.5c0-.28.22-.5.5-.5H12zm1 1V6.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V9h-3z" fill={primaryFill} /></svg>;
}

const BinFull20Filled = wrapIcon(rawSvg({}), 'BinFull20Filled');
export default BinFull20Filled;
      