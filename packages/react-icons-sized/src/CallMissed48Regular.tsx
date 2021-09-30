import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.6 8.6c4.73 2.32 5.4 8 2.93 12.15a4.94 4.94 0 01-4.75 2.38l-3.43-.35a5.25 5.25 0 01-4.53-3.85L29 15.87c-.2-.77-.66-1.23-1.15-1.34-2.19-.52-5.5-.5-7.68 0-.49.12-.94.57-1.16 1.34l-.83 3.06a5.25 5.25 0 01-4.52 3.85l-3.43.35a4.94 4.94 0 01-4.75-2.38C3 16.6 3.67 10.92 8.4 8.61A35.35 35.35 0 0124 5c6.54 0 11.85 1.76 15.6 3.6zm.78 10.87c1.95-3.27 1.18-7.13-1.87-8.62A32.85 32.85 0 0024 7.5a32.85 32.85 0 00-14.5 3.35c-3.06 1.5-3.83 5.35-1.88 8.62.48.82 1.4 1.27 2.34 1.18l3.43-.36a2.75 2.75 0 002.37-2.02l.83-3.05a4.2 4.2 0 013-3.12c2.54-.6 6.25-.61 8.83 0a4.2 4.2 0 012.99 3.12l.83 3.05c.3 1.1 1.24 1.9 2.37 2.02l3.43.36c.94.1 1.86-.36 2.34-1.18z" fill={primaryFill} /><path d="M25 29.25a1.25 1.25 0 00-2.5 0v5.5c0 .69.56 1.25 1.25 1.25h3.5a1.25 1.25 0 000-2.5H25v-4.25z" fill={primaryFill} /><path d="M24 44a11 11 0 100-22 11 11 0 000 22zm0-2.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z" fill={primaryFill} /></svg>;
}

const CallMissed48Regular = wrapIcon(rawSvg({}), 'CallMissed48Regular');
export default CallMissed48Regular;
      