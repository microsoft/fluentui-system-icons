import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 6.02a1.25 1.25 0 00-1.92 0c-2.99 3.59-8.9 7.85-12.29 9.75-.34.19-.57.53-.63.92L7.43 36.5H5.25a1.25 1.25 0 000 2.5h37.5a1.25 1.25 0 100-2.5h-2.1l-2.73-19.81a1.25 1.25 0 00-.63-.92C33.9 13.87 28 9.6 25 6.02zM17.8 36.5c2.1-3.05 4.26-6.96 6.21-13.15a48.79 48.79 0 006.21 13.15H17.8z" fill={primaryFill} /></svg>;
}

const Tent48Filled = wrapIcon(rawSvg({}), 'Tent48Filled');
export default Tent48Filled;
      