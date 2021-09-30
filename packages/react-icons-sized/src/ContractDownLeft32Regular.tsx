import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7.5V16h7.23A3.77 3.77 0 0116 19.77V27h8.5a2.5 2.5 0 002.5-2.5V19a1 1 0 112 0v5.5a4.5 4.5 0 01-4.5 4.5h-17A4.5 4.5 0 013 24.5v-17A4.5 4.5 0 017.5 3H13a1 1 0 110 2H7.5A2.5 2.5 0 005 7.5zM5 18v6.5A2.5 2.5 0 007.5 27H14v-7.23c0-.98-.8-1.77-1.77-1.77H5zm16.41-6H28a1 1 0 110 2h-9a1 1 0 01-1-1V4a1 1 0 112 0v6.59l7.3-7.3a1 1 0 111.4 1.42L21.42 12z" fill={primaryFill} /></svg>;
}

const ContractDownLeft32Regular = wrapIcon(rawSvg({}), 'ContractDownLeft32Regular');
export default ContractDownLeft32Regular;
      