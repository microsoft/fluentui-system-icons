import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.58 1.33a.6.6 0 01.84 0l2.13 2.12a.6.6 0 01-.85.85l-1.1-1.1v4.3a.6.6 0 11-1.2 0V3.2L8.3 4.3a.6.6 0 11-.85-.85l2.13-2.12z" fill={primaryFill} /><path d="M3.9 10c0-.33.27-.6.6-.6h11a.6.6 0 110 1.2h-11a.6.6 0 01-.6-.6z" fill={primaryFill} /><path d="M10.6 16.8v-4.3a.6.6 0 10-1.2 0v4.3l-1.1-1.1a.6.6 0 00-.85.85l2.13 2.12a.6.6 0 00.84 0l2.13-2.12a.6.6 0 00-.85-.85l-1.1 1.1z" fill={primaryFill} /></svg>;
}

const ArrowMaximizeVerticalFilled = wrapIcon(rawSvg({}), 'ArrowMaximizeVerticalFilled');
export default ArrowMaximizeVerticalFilled;
      