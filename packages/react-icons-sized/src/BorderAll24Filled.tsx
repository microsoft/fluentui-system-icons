import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm10 13h5a1 1 0 001-1v-5h-6v6zm-2-6H5v5a1 1 0 001 1h5v-6zm2-2h6V6a1 1 0 00-1-1h-5v6zm-2-6H6a1 1 0 00-1 1v5h6V5z" fill={primaryFill} /></svg>;
}

const BorderAll24Filled = wrapIcon(rawSvg({}), 'BorderAll24Filled');
export default BorderAll24Filled;
      