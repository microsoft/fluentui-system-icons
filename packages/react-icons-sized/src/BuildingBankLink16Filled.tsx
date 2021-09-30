import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.3 1.71c.41-.32 1-.32 1.4 0l4.97 3.8c.63.48.3 1.49-.5 1.49H2.83a.83.83 0 01-.5-1.5l4.96-3.79zM8 5.25a.75.75 0 100-1.5.75.75 0 000 1.5zM3.5 8v3H5V8H3.5zM6 8v2.05a3.5 3.5 0 011.5-.9V8H6zm-2.75 4h1.79a3.53 3.53 0 00.3 2H2.5a.5.5 0 01-.5-.5v-.25c0-.69.56-1.25 1.25-1.25zm9.25-4v1H11V8h1.5zM10 8v1H8.5V8H10zm-1.5 2a2.5 2.5 0 000 5H9a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H9a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H12a.5.5 0 000 1h.5a2.5 2.5 0 000-5H12zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const BuildingBankLink16Filled = wrapIcon(rawSvg({}), 'BuildingBankLink16Filled');
export default BuildingBankLink16Filled;
      