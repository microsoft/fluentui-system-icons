import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.14 2.04c.18-.12.31-.22.4-.3l.1-.1a.5.5 0 01.71 0l.11.1.4.3a8.7 8.7 0 003.78 1.4 7.89 7.89 0 00.8.06h.05A.5.5 0 0114 4v2.76a7.5 7.5 0 01-3.68 6.45l-2.06 1.22a.5.5 0 01-.51 0l-2.06-1.22A7.5 7.5 0 012 6.76V4a.5.5 0 01.5-.5h.06a5.17 5.17 0 00.8-.07 9.27 9.27 0 003.78-1.39zm2.11 5.21A1.25 1.25 0 107.5 8.4v1.1a.5.5 0 101 0V8.4c.44-.2.75-.64.75-1.15z" fill={primaryFill} /></svg>;
}

const ShieldKeyhole16Filled = wrapIcon(rawSvg({}), 'ShieldKeyhole16Filled');
export default ShieldKeyhole16Filled;
      