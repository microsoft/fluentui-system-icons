import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.75c0-.42.34-.75.75-.75h16.5c.62 0 .98.7.6 1.2L16.7 9.75l4.16 5.55c.38.5.02 1.2-.6 1.2H4.5v4.75c0 .38-.28.7-.65.74h-.1a.75.75 0 01-.74-.64l-.01-.1V3.75z" fill={primaryFill} /></svg>;
}

const Flag24Filled = wrapIcon(rawSvg({}), 'Flag24Filled');
export default Flag24Filled;
      