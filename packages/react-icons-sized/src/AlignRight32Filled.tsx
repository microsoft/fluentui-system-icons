import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29 4a1 1 0 10-2 0v24a1 1 0 102 0V4zm-7.5 1A3.5 3.5 0 0125 8.5v3a3.5 3.5 0 01-3.5 3.5h-15A3.5 3.5 0 013 11.5v-3A3.5 3.5 0 016.5 5h15zm0 12a3.5 3.5 0 013.5 3.5v3a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 019 23.5v-3a3.5 3.5 0 013.5-3.5h9z" fill={primaryFill} /></svg>;
}

const AlignRight32Filled = wrapIcon(rawSvg({}), 'AlignRight32Filled');
export default AlignRight32Filled;
      