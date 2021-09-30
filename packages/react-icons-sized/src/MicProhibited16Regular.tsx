import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2A2.5 2.5 0 004 4.5V8c0 .83.4 1.56 1.02 2.02.04-.41.12-.8.24-1.18A1.5 1.5 0 015 8V4.5a1.5 1.5 0 113 0v1.1c.32-.16.65-.3 1-.4v-.7A2.5 2.5 0 006.5 2zm-1.46 9.18c.05.4.14.8.28 1.16A4.5 4.5 0 012 8a.5.5 0 011 0 3.5 3.5 0 002.04 3.18zM6 10.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const MicProhibited16Regular = wrapIcon(rawSvg({}), 'MicProhibited16Regular');
export default MicProhibited16Regular;
      