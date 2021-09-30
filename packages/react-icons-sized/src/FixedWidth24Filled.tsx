import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 4c.41 0 .75.3.75.69V6h6.75V4.69c0-.38.34-.69.75-.69s.75.3.75.69V6h6.75V4.69c0-.38.34-.69.75-.69s.75.3.75.69V8.8c0 .38-.34.69-.75.69s-.75-.3-.75-.69V7.5h-6.75v1.31c0 .38-.34.69-.75.69s-.75-.3-.75-.69V7.5H4.5v1.31c0 .38-.34.69-.75.69S3 9.2 3 8.81V4.7c0-.38.34-.69.75-.69z" fill={primaryFill} /><path d="M5.75 11A2.75 2.75 0 003 13.75v4a2.75 2.75 0 002.75 2.75h5.5V11h-5.5z" fill={primaryFill} /><path d="M18.25 20.5h-5.5V11h5.5A2.75 2.75 0 0121 13.75v4a2.75 2.75 0 01-2.75 2.75z" fill={primaryFill} /></svg>;
}

const FixedWidth24Filled = wrapIcon(rawSvg({}), 'FixedWidth24Filled');
export default FixedWidth24Filled;
      