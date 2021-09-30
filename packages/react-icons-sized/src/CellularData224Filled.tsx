import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8a1 1 0 011 1v10a1 1 0 01-2 0V9a1 1 0 011-1zm-4 3a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1zm-4 3a1 1 0 011 1v4a1 1 0 01-1 1 1 1 0 01-1-1v-4a1 1 0 011-1zm-4 3a1 1 0 011 .98v1.04A1 1 0 014 20a1 1 0 01-1-.98v-1.04A1 1 0 014 17z" fill={primaryFill} /></svg>;
}

const CellularData224Filled = wrapIcon(rawSvg({}), 'CellularData224Filled');
export default CellularData224Filled;
      