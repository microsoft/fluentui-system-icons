import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3h-3a1 1 0 00-1 1v15.25a1 1 0 001 1h3.88a4.87 4.87 0 002.43-9.1A4.74 4.74 0 0018 3zm0 7.5h-2V5h2a2.75 2.75 0 110 5.5zm-2 7.75V12.5h2.88a2.88 2.88 0 010 5.75H16zM7.26 3a1 1 0 01.93.66l5.5 15.25a1 1 0 01-1.88.68L10.51 16H3.8l-1.35 3.6a1 1 0 01-1.88-.7L6.31 3.65A1 1 0 017.26 3zM4.55 14h5.24L7.23 6.89 4.55 14z" fill={primaryFill} /></svg>;
}

const TextCaseUppercase24Filled = wrapIcon(rawSvg({}), 'TextCaseUppercase24Filled');
export default TextCaseUppercase24Filled;
      