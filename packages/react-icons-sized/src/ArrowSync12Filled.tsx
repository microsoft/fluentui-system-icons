import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.42 2.92a.6.6 0 000-.84L6.17.83a.6.6 0 00-.84.84l.24.25A4.1 4.1 0 002.82 8.6a.6.6 0 00.93-.76 2.9 2.9 0 011.76-4.7l-.18.2a.6.6 0 00.84.84l1.25-1.25zm.7.24A.6.6 0 008.1 4 2.9 2.9 0 016.5 8.86l.18-.19a.6.6 0 00-.84-.84L4.58 9.08a.6.6 0 000 .84l1.25 1.25a.6.6 0 00.84-.84l-.24-.25a4.1 4.1 0 002.54-6.9.6.6 0 00-.84-.02z" fill={primaryFill} /></svg>;
}

const ArrowSync12Filled = wrapIcon(rawSvg({}), 'ArrowSync12Filled');
export default ArrowSync12Filled;
      