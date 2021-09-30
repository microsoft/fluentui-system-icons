import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 16a7 7 0 100-14 7 7 0 000 14zm-8.5 2A3.5 3.5 0 004 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0016 30c1.14 0 2.25-.1 3.3-.3a2.5 2.5 0 011.7-3.65v-.42a2.5 2.5 0 01-1.74-2.62l.48-5.01H7.5zm13.75-.1a1 1 0 011-.9h6.25a1 1 0 110 2h-5.34l-.3 3.09 1.92-.26a4.6 4.6 0 11.61 9.17h-.61c-1.31 0-2.57-.5-3.53-1.38l-.43-.38a1 1 0 011.36-1.48l.42.4c.6.54 1.37.84 2.18.84h.61a2.6 2.6 0 10-.35-5.19l-3.16.43a1 1 0 01-1.13-1.08l.5-5.25z" fill={primaryFill} /></svg>;
}

const Person532Filled = wrapIcon(rawSvg({}), 'Person532Filled');
export default Person532Filled;
      