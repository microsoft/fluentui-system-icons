import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.6 4.72a3 3 0 01.94.95l2.87 4.58h4.09a1 1 0 010 2h-2.75a5 5 0 11-4-2h.3l-.28-.45-1.92-3.07a1 1 0 00-1.63-.1l-.07.1L3.6 18.78a1 1 0 01-1.75-.96l.05-.1L9.46 5.67a3 3 0 014.13-.95zm1.15 7.53a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /></svg>;
}

const Autocorrect24Filled = wrapIcon(rawSvg({}), 'Autocorrect24Filled');
export default Autocorrect24Filled;
      