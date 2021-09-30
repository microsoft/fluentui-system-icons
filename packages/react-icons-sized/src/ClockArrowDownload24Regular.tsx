import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-19.97.78 6.52 6.52 0 011.64-1.14 8.34 8.34 0 0116.66.36 8.34 8.34 0 01-7.97 8.33c-.3.6-.68 1.16-1.14 1.64L12 22a10 10 0 0010-10zm-16 .02a5.5 5.5 0 101 0v5.77l1.65-1.64a.5.5 0 01.7.7l-2.5 2.5a.5.5 0 01-.7 0l-2.5-2.5a.5.5 0 01.7-.7L6 17.79v-5.77zM4 20h5a.5.5 0 010 1H4a.5.5 0 010-1zm8.5-13.35a.75.75 0 00-1.5.1v6.1c.06.37.37.65.75.65h4.1a.75.75 0 00-.1-1.5H12.5V6.65z" fill={primaryFill} /></svg>;
}

const ClockArrowDownload24Regular = wrapIcon(rawSvg({}), 'ClockArrowDownload24Regular');
export default ClockArrowDownload24Regular;
      