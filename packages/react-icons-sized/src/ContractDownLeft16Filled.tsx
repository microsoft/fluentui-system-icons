import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5V8h3.23C7.21 8 8 8.8 8 9.77V13h3.5c.83 0 1.5-.67 1.5-1.5V9.27a.5.5 0 011 0v2.23a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h2.23a.5.5 0 010 1H4.5zm9 3h-2.8l3.15-3.15a.5.5 0 00-.7-.7L10 5.29V2.5a.5.5 0 00-1 0v4a.5.5 0 00.52.5h3.98a.5.5 0 000-1z" fill={primaryFill} /></svg>;
}

const ContractDownLeft16Filled = wrapIcon(rawSvg({}), 'ContractDownLeft16Filled');
export default ContractDownLeft16Filled;
      