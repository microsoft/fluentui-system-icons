import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 000 2h24a1 1 0 100-2H4zm1 7.5A3.5 3.5 0 018.5 7h3a3.5 3.5 0 013.5 3.5v15a3.5 3.5 0 01-3.5 3.5h-3A3.5 3.5 0 015 25.5v-15zm12 0A3.5 3.5 0 0120.5 7h3a3.5 3.5 0 013.5 3.5v9a3.5 3.5 0 01-3.5 3.5h-3a3.5 3.5 0 01-3.5-3.5v-9z" fill={primaryFill} /></svg>;
}

const AlignTop32Filled = wrapIcon(rawSvg({}), 'AlignTop32Filled');
export default AlignTop32Filled;
      