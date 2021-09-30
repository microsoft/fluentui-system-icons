import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 5.75c0-1.8 1.46-3.25 3.25-3.25h12.5c1.8 0 3.25 1.46 3.25 3.25v12.5c0 1.8-1.46 3.25-3.25 3.25H5.75a3.25 3.25 0 01-3.25-3.25V5.75zM5.75 5a.75.75 0 00-.75.75v12.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V5.75a.75.75 0 00-.75-.75H5.75z" fill={primaryFill} /></svg>;
}

const BorderOutsideThick24Filled = wrapIcon(rawSvg({}), 'BorderOutsideThick24Filled');
export default BorderOutsideThick24Filled;
      