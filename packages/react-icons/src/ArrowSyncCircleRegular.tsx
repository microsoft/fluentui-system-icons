import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a7 7 0 110 14 7 7 0 010-14zm8 7a8 8 0 10-16 0 8 8 0 0016 0zm-8-2.5c1.02 0 1.9.62 2.3 1.5h-.8a.5.5 0 100 1h2a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.7a3.5 3.5 0 00-5.6-.53.5.5 0 00.74.66A2.5 2.5 0 0110 7.5zm-3 4.3v.7a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-.8a2.5 2.5 0 004.16.67.5.5 0 01.75.66A3.5 3.5 0 017 11.8z" fill={primaryFill} /></svg>;
}

const ArrowSyncCircleRegular = wrapIcon(rawSvg({}), 'ArrowSyncCircleRegular');
export default ArrowSyncCircleRegular;
      