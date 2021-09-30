import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 3.75a.75.75 0 00-1.5 0V9c0 1.37.34 2.74 1.16 3.78A4.67 4.67 0 0010 14.5c1.7 0 3-.65 3.84-1.72A6.09 6.09 0 0015 9V3.75a.75.75 0 00-1.5 0V9a4.6 4.6 0 01-.84 2.85C12.13 12.53 11.3 13 10 13c-1.3 0-2.13-.47-2.66-1.15A4.6 4.6 0 016.5 9V3.75zM5.75 15.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /></svg>;
}

const TextUnderline20Filled = wrapIcon(rawSvg({}), 'TextUnderline20Filled');
export default TextUnderline20Filled;
      