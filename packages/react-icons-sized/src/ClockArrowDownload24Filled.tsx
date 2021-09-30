import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-19.97.78 6.48 6.48 0 018.97.03V6.75a.75.75 0 011.5-.1V12h3.25a.75.75 0 01.1 1.5h-4.1l-.14-.01a6.47 6.47 0 01-.4 8.48L12 22a10 10 0 0010-10zM1 17.5a5.5 5.5 0 015-5.48v5.77l-1.65-1.64a.5.5 0 00-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7L7 17.79v-5.77a5.5 5.5 0 11-6 5.48zm2.5 3c0 .28.22.5.5.5h5a.5.5 0 000-1H4a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const ClockArrowDownload24Filled = wrapIcon(rawSvg({}), 'ClockArrowDownload24Filled');
export default ClockArrowDownload24Filled;
      