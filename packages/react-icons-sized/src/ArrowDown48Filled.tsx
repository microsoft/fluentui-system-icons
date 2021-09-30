import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.5 5.25a1.5 1.5 0 00-3 0v31.84l-12.18-12.4a1.5 1.5 0 10-2.14 2.11l14.75 15a1.48 1.48 0 001.07.45 1.5 1.5 0 001.07-.45l14.75-15a1.5 1.5 0 10-2.14-2.1L25.5 37.09V5.25z" fill={primaryFill} /></svg>;
}

const ArrowDown48Filled = wrapIcon(rawSvg({}), 'ArrowDown48Filled');
export default ArrowDown48Filled;
      