import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.5a2.5 2.5 0 015 0V5h-.02a1.3 1.3 0 00-1.22.87v.01L9 6.66a.58.58 0 01-.35.36l-.77.25h-.01a1.3 1.3 0 000 2.46h.01l.77.25a.58.58 0 01.35.31A2.5 2.5 0 015.5 8V4.5zm3.82 6.74A3.49 3.49 0 014.5 8a.5.5 0 00-1 0 4.5 4.5 0 004 4.47v1.03a.5.5 0 001 0v-1.03a4.47 4.47 0 001.5-.44 1.25 1.25 0 010-.13 1.3 1.3 0 01-.68-.66zm1.47-.44a.3.3 0 01-.12.14.3.3 0 01-.17.06.3.3 0 01-.29-.2l-.24-.77a1.58 1.58 0 00-1-1l-.77-.25a.3.3 0 010-.57l.77-.25a1.58 1.58 0 00.98-1l.25-.76a.3.3 0 01.57 0l.25.77a1.57 1.57 0 001 1l.76.24h.02a.3.3 0 010 .58l-.77.25a1.58 1.58 0 00-1 1l-.24.76zm4.04.97l-.62-.2a1.26 1.26 0 01-.8-.8l-.2-.6a.24.24 0 00-.45 0l-.2.6a1.26 1.26 0 01-.79.8l-.6.2a.24.24 0 000 .46l.6.2a1.26 1.26 0 01.8.8l.2.6a.24.24 0 00.37.13.24.24 0 00.09-.12l.2-.61a1.26 1.26 0 01.8-.8l.6-.2a.24.24 0 000-.46z" fill={primaryFill} /></svg>;
}

const MicSparkle16Filled = wrapIcon(rawSvg({}), 'MicSparkle16Filled');
export default MicSparkle16Filled;
      