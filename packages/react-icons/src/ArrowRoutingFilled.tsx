import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.78 2.22a.75.75 0 10-1.06 1.06L15.44 5h-4.19A2.75 2.75 0 008.5 7.75v5.5c0 .64-.48 1.17-1.1 1.24a2.75 2.75 0 100 1.5 2.75 2.75 0 002.6-2.74v-5.5c0-.69.56-1.25 1.25-1.25h4.19l-1.72 1.72a.75.75 0 001.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3z" fill={primaryFill} /></svg>;
}

const ArrowRoutingFilled = wrapIcon(rawSvg({}), 'ArrowRoutingFilled');
export default ArrowRoutingFilled;
      