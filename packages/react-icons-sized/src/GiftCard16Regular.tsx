import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V5zm12 7a1 1 0 001-1V8H6.7l1.15 1.15a.5.5 0 11-.7.7L6 8.71V12h7zM7.91 7H14V5a1 1 0 00-1-1H6v1.09A1.5 1.5 0 017.91 7zM6.5 7a.5.5 0 10-.5-.5V7h.5zM5 5.09V4H3a1 1 0 00-1 1v2h1.09A1.5 1.5 0 015 5.09zM4.5 7H5v-.5a.5.5 0 10-.5.5zm-.2 1H2v3a1 1 0 001 1h2V8.7L3.85 9.86a.5.5 0 01-.7-.7L4.29 8z" fill={primaryFill} /></svg>;
}

const GiftCard16Regular = wrapIcon(rawSvg({}), 'GiftCard16Regular');
export default GiftCard16Regular;
      