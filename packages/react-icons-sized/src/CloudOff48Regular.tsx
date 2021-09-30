import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M33.73 35.5l8.14 8.13a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l9.84 9.85A10.93 10.93 0 0013.04 20h-.29a7.75 7.75 0 000 15.5h20.98zm-2.5-2.5H12.75a5.25 5.25 0 110-10.5h1.5c.69 0 1.25-.56 1.25-1.25V21c0-1.1.21-2.17.6-3.14L31.23 33zm9.27-5.25a5.25 5.25 0 01-2.8 4.65l1.82 1.82A7.74 7.74 0 0035.25 20h-.3a11 11 0 00-17.5-7.84l1.8 1.79A8.5 8.5 0 0132.5 21v.25c0 .69.56 1.25 1.25 1.25h1.5c2.9 0 5.25 2.35 5.25 5.25z" fill={primaryFill} /></svg>;
}

const CloudOff48Regular = wrapIcon(rawSvg({}), 'CloudOff48Regular');
export default CloudOff48Regular;
      