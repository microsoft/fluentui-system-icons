import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.04 19h5.92a3 3 0 01-5.92 0zM12 2a7.5 7.5 0 017.5 7.5v4l1.42 3.16a.95.95 0 01-.87 1.34H3.95a.95.95 0 01-.86-1.34L4.5 13.5V9.24A7.5 7.5 0 0112 2zm11 6.25a.75.75 0 01.1 1.5H21a.75.75 0 01-.1-1.5H23zm-20 0a.75.75 0 01.1 1.5H1a.75.75 0 01-.1-1.5H3zm19.6-5.7c.23.3.2.72-.07.98l-.08.07-2 1.5a.75.75 0 01-.98-1.13l.08-.07 2-1.5a.75.75 0 011.05.15zM2.45 2.4l2 1.5a.75.75 0 11-.9 1.2l-2-1.5a.75.75 0 11.9-1.2z" fill={primaryFill} /></svg>;
}

const AlertOn24Filled = wrapIcon(rawSvg({}), 'AlertOn24Filled');
export default AlertOn24Filled;
      