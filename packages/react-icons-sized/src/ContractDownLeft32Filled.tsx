import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.41 12l7.3-7.3a1 1 0 00-1.42-1.4L20 10.58V4a1 1 0 10-2 0v9a1 1 0 001 1h9a1 1 0 100-2h-6.59zM7.5 5A2.5 2.5 0 005 7.5V16h7.23A3.77 3.77 0 0116 19.77V27h8.5a2.5 2.5 0 002.5-2.5V19a1 1 0 112 0v5.5a4.5 4.5 0 01-4.5 4.5h-17A4.5 4.5 0 013 24.5v-17A4.5 4.5 0 017.5 3H13a1 1 0 110 2H7.5z" fill={primaryFill} /></svg>;
}

const ContractDownLeft32Filled = wrapIcon(rawSvg({}), 'ContractDownLeft32Filled');
export default ContractDownLeft32Filled;
      