import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.31 18.25L3.28 2.22a.75.75 0 00-1.06 1.06l7.28 7.28v3.94a4.5 4.5 0 007.39 3.45l1.42 1.42A6.5 6.5 0 017.5 14.5v-.75a.75.75 0 10-1.51 0v.75a8 8 0 007.25 7.96v2.79a.75.75 0 001.5 0v-2.79a7.97 7.97 0 004.62-2.03l5.35 5.35c.3.3.77.3 1.06 0a.75.75 0 000-1.06l-5.4-5.4-1.07-1.07zm1.88-.24c.52-1.06.81-2.25.81-3.51v-.75a.75.75 0 10-1.5 0v.75c0 .84-.16 1.64-.45 2.37l1.14 1.14zm-2.75-2.76c.04-.24.06-.5.06-.75v-8a4.5 4.5 0 00-9-.18l8.94 8.93z" fill={primaryFill} /></svg>;
}

const MicOff28Filled = wrapIcon(rawSvg({}), 'MicOff28Filled');
export default MicOff28Filled;
      