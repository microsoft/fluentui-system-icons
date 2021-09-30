import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.98 2.8a1.7 1.7 0 00-2.3.09l-3.4 3.39a.75.75 0 11-1.06-1.06l3.4-3.4a3.2 3.2 0 114.45 4.58l-4.72 4.5a1.92 1.92 0 01-2.69-2.76L6.9 3.9a.75.75 0 111.06 1.06L3.72 9.2a.42.42 0 00.6.6l4.72-4.49a1.7 1.7 0 00-.06-2.5z" fill={primaryFill} /></svg>;
}

const Attach12Filled = wrapIcon(rawSvg({}), 'Attach12Filled');
export default Attach12Filled;
      