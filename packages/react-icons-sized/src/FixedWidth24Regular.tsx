import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4.69c0-.38-.34-.69-.75-.69S3 4.3 3 4.69V8.8c0 .38.34.69.75.69s.75-.3.75-.69V7.5h6.75v1.31c0 .38.34.69.75.69s.75-.3.75-.69V7.5h6.75v1.31c0 .38.34.69.75.69s.75-.3.75-.69V4.7c0-.38-.34-.69-.75-.69s-.75.3-.75.69V6h-6.75V4.69c0-.38-.34-.69-.75-.69s-.75.3-.75.69V6H4.5V4.69z" fill={primaryFill} /><path d="M5.75 11A2.75 2.75 0 003 13.75v4a2.75 2.75 0 002.75 2.75h12.5A2.75 2.75 0 0021 17.75v-4A2.75 2.75 0 0018.25 11H5.75zm5.5 1.5V19h-5.5c-.69 0-1.25-.56-1.25-1.25v-4c0-.69.56-1.25 1.25-1.25h5.5zm1.5 6.5v-6.5h5.5c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-5.5z" fill={primaryFill} /></svg>;
}

const FixedWidth24Regular = wrapIcon(rawSvg({}), 'FixedWidth24Regular');
export default FixedWidth24Regular;
      