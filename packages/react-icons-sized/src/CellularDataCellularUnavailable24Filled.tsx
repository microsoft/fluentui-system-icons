import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 19a1 1 0 110 2 1 1 0 010-2zM16 9a1 1 0 011 1v10a1 1 0 01-2 0V10a1 1 0 011-1zm-4 3a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1zm-4 3a1 1 0 011 1v4a1 1 0 01-1 1 1 1 0 01-1-1v-4a1 1 0 011-1zm-4 3a1 1 0 011 .98v1.04A1 1 0 014 21a1 1 0 01-1-.98v-1.04A1 1 0 014 18zM20 6a1 1 0 011 1v10a1 1 0 01-2 0V7a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const CellularDataCellularUnavailable24Filled = wrapIcon(rawSvg({}), 'CellularDataCellularUnavailable24Filled');
export default CellularDataCellularUnavailable24Filled;
      