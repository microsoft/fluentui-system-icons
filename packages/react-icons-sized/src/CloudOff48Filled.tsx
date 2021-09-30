import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M33.73 35.5l8.14 8.13a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l9.84 9.85A10.93 10.93 0 0013.04 20h-.29a7.75 7.75 0 000 15.5h20.98zM43 27.75c0 2.7-1.38 5.08-3.48 6.47L17.46 12.16A11 11 0 0134.96 20h.29A7.75 7.75 0 0143 27.75z" fill={primaryFill} /></svg>;
}

const CloudOff48Filled = wrapIcon(rawSvg({}), 'CloudOff48Filled');
export default CloudOff48Filled;
      