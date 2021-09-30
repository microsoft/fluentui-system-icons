import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.44 2.14a.75.75 0 00-.89.01 16.03 16.03 0 01-4.77 2.31A26.72 26.72 0 013.7 5.5H3.7a.75.75 0 00-.69.75v6.5c0 5.1 3.48 10.87 10.77 13.21.15.05.31.05.46 0 7.3-2.34 10.52-8.13 10.52-12.96V6.25c0-.39-.3-.71-.69-.75H24a11.58 11.58 0 01-.88-.12c-.6-.09-1.44-.24-2.4-.48a18.61 18.61 0 01-6.29-2.76z" fill={primaryFill} /></svg>;
}

const Shield28Filled = wrapIcon(rawSvg({}), 'Shield28Filled');
export default Shield28Filled;
      