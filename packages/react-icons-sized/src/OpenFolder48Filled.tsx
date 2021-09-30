import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M34.63 6.13a7.5 7.5 0 017.5 7.5v9a1.5 1.5 0 01-3 0v-9a4.5 4.5 0 00-4.5-4.5H13.36a4.5 4.5 0 00-4.5 4.5v21a4.5 4.5 0 004.5 4.5h9.26a1.5 1.5 0 010 3h-9.25a7.5 7.5 0 01-7.5-7.5v-21a7.5 7.5 0 017.5-7.5h21.24z" fill={primaryFill} /><path d="M18 19.5c0-.83.67-1.5 1.5-1.5h13a1.5 1.5 0 010 3h-9.38l14.44 14.44a1.5 1.5 0 01-2.12 2.12L21 23.12v9.38a1.5 1.5 0 01-3 0v-13z" fill={primaryFill} /></svg>;
}

const OpenFolder48Filled = wrapIcon(rawSvg({}), 'OpenFolder48Filled');
export default OpenFolder48Filled;
      