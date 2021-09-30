import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H4zm2 11a2 2 0 01-1.73-1H12a3 3 0 003-3V5.27c.6.34 1 .99 1 1.73v4a4 4 0 01-4 4H6zm2 2a2 2 0 01-1.73-1H12a5 5 0 005-5V7.27c.6.34 1 .99 1 1.73v2a6 6 0 01-6 6H8z" fill={primaryFill} /></svg>;
}

const StackRegular = wrapIcon(rawSvg({}), 'StackRegular');
export default StackRegular;
      