import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 4h.75v4.75c0 .4-.1.81-.3 1.18l-2.6 4.86A1.5 1.5 0 005.67 17h8.66a1.5 1.5 0 001.32-2.2l-2.6-4.87a2.5 2.5 0 01-.3-1.18V4h.75a.5.5 0 000-1h-7a.5.5 0 000 1zm1.75 4.75V4h3.5v4.75c0 .57.14 1.14.41 1.65l.6 1.1H7.24l.59-1.1c.27-.5.41-1.08.41-1.65zM6.71 12.5h6.58l1.48 2.76a.5.5 0 01-.44.74H5.67a.5.5 0 01-.44-.74L6.7 12.5z" fill={primaryFill} /></svg>;
}

const Beaker20Regular = wrapIcon(rawSvg({}), 'Beaker20Regular');
export default Beaker20Regular;
      