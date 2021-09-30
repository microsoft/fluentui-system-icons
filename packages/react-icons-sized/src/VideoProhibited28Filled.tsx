import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 6A3.25 3.25 0 002 9.25v10.5C2 21.55 3.46 23 5.25 23h8.18A7.49 7.49 0 0118 13.43V9.25C18 7.45 16.54 6 14.75 6h-9.5zm20 2.75v5.94a7.47 7.47 0 00-5.75-1.62V11.5l3.61-3.63a1.25 1.25 0 012.14.88zM20.5 27a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-1.5a4.98 4.98 0 01-2.97-.97l7-7a5 5 0 01-4.03 7.97zm2.97-9.03l-7 7a5 5 0 017-7z" fill={primaryFill} /></svg>;
}

const VideoProhibited28Filled = wrapIcon(rawSvg({}), 'VideoProhibited28Filled');
export default VideoProhibited28Filled;
      