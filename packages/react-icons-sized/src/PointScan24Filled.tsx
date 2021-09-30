import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2c.38 0 .7.28.74.65l.01.1v4.8A6.25 6.25 0 0116.46 13h4.79a.75.75 0 01.1 1.5H16.45A6.25 6.25 0 0111 19.96v1.29a.75.75 0 01-1.5.1V19.95a6.25 6.25 0 01-5.46-5.45H2.75a.75.75 0 01-.1-1.5H4.05A6.25 6.25 0 019.5 7.54V2.75c0-.41.34-.75.75-.75zm0 5.5c-.25 0-.5.01-.75.04V13H4.04a6.31 6.31 0 000 1.5H9.5v5.46a6.3 6.3 0 001.5 0V14.5h5.46a6.31 6.31 0 000-1.5H11V7.54c-.25-.03-.5-.04-.75-.04z" fill={primaryFill} /></svg>;
}

const PointScan24Filled = wrapIcon(rawSvg({}), 'PointScan24Filled');
export default PointScan24Filled;
      