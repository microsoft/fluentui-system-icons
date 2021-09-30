import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16 6a3 3 0 112.52 2.96l-2.03 3.36a3 3 0 01-4.75 3.65L8 17.84V18a3 3 0 11-.47-1.6l3.54-1.77A3.01 3.01 0 0114 11c.48 0 .94.11 1.34.32l1.8-2.97A3 3 0 0116 6zm-2 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-9 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const DataLine24Regular = wrapIcon(rawSvg({}), 'DataLine24Regular');
export default DataLine24Regular;
      