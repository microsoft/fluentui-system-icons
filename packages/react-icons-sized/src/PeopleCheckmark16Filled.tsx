import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm3.53 4.36A2 2 0 0111 3a2 2 0 011.66 3.12 5.52 5.52 0 00-3.13.24zM6.21 13h-.15C3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h3.76a5.48 5.48 0 00-1.05 5zm5.29 3a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-5.65l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const PeopleCheckmark16Filled = wrapIcon(rawSvg({}), 'PeopleCheckmark16Filled');
export default PeopleCheckmark16Filled;
      