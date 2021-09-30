import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.2 4L2 8.2V6.8L4.8 4h1.4z" fill={primaryFill} /><path d="M13.2 4l-1.46 1.46a3.48 3.48 0 00-1.02-.39L11.79 4h1.42z" fill={primaryFill} /><path d="M12.12 7.17a2.51 2.51 0 00-2.34-1.16 2.5 2.5 0 102.34 1.16z" fill={primaryFill} /><path d="M12.84 6.45c.2.29.37.6.48.94L16.69 4 16.5 4h-1.2l-2.46 2.45z" fill={primaryFill} /><path d="M7.5 12c-.08 0-.15 0-.22.02A1.5 1.5 0 006 13.5V16h8v-2.5a1.5 1.5 0 00-1.5-1.5h-5z" fill={primaryFill} /><path d="M12.5 11c.22 0 .43.03.63.08L18 6.2V5.5c0-.2-.04-.4-.12-.59l-4.5 4.5a3.5 3.5 0 01-.93 1.59h.05z" fill={primaryFill} /><path d="M14.4 11.88c.23.27.4.58.5.93L18 9.7V8.29l-3.6 3.6z" fill={primaryFill} /><path d="M15 16v-1.2l3-3v1.4L15.2 16H15z" fill={primaryFill} /><path d="M5 15.7v-1.4l-1.7 1.69.2.01h1.2l.3-.3z" fill={primaryFill} /><path d="M6.57 9.22c.08.36.21.7.4 1.02L2.11 15.1A1.5 1.5 0 012 14.5v-.7l4.57-4.58z" fill={primaryFill} /><path d="M9.7 4L2 11.7v-1.4L8.3 4h1.4z" fill={primaryFill} /></svg>;
}

const VideoBackgroundEffect20Filled = wrapIcon(rawSvg({}), 'VideoBackgroundEffect20Filled');
export default VideoBackgroundEffect20Filled;
      