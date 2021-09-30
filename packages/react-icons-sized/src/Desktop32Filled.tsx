import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 4.45 3.46 3 5.25 3h21.5C28.55 3 30 4.46 30 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25h-6.74v2h3a1 1 0 110 2H9a1 1 0 110-2h3v-2H5.25A3.25 3.25 0 012 21.75V6.25zM14.01 25v2h4v-2h-4z" fill={primaryFill} /></svg>;
}

const Desktop32Filled = wrapIcon(rawSvg({}), 'Desktop32Filled');
export default Desktop32Filled;
      