import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 15.15a2.85 2.85 0 01.69 1.11l.45 1.38a.54.54 0 001.02 0l.45-1.38a2.84 2.84 0 011.8-1.8l1.38-.44a.54.54 0 000-1.03h-.03l-1.38-.45a2.84 2.84 0 01-1.8-1.8L16 9.36a.54.54 0 00-1.03 0l-.45 1.38-.01.03a2.84 2.84 0 01-1.76 1.77l-1.38.44a.54.54 0 000 1.03l1.38.45c.42.14.8.37 1.11.69zM16 6v2.1a1.54 1.54 0 00-1.5.24V6a2.5 2.5 0 00-5 0v6c0 .56.19 1.08.5 1.5a1.54 1.54 0 001.03 1.45h.01l1.39.46c.26.09.5.23.7.43A4 4 0 018 12V6a4 4 0 118 0zm-3.75 11.5c.54 0 1.07-.08 1.56-.24l.23.7v.01c.1.25.25.48.45.65-.55.2-1.13.32-1.74.36v2.27a.75.75 0 01-1.5.1v-2.37A6.75 6.75 0 015 12.48v-.73a.75.75 0 011.5-.1v.6a5.25 5.25 0 005.03 5.25h.72zm9.77 1.46l.76.25h.02a.3.3 0 01.14.47.3.3 0 01-.14.1l-.77.26a1.58 1.58 0 00-1 1l-.24.76a.3.3 0 01-.58 0l-.24-.77a1.57 1.57 0 00-1-1l-.77-.25a.3.3 0 01-.14-.46.3.3 0 01.14-.1l.77-.26a1.58 1.58 0 00.98-1l.25-.76a.3.3 0 01.57 0l.25.77a1.58 1.58 0 001 1z" fill={primaryFill} /></svg>;
}

const MicSparkle24Regular = wrapIcon(rawSvg({}), 'MicSparkle24Regular');
export default MicSparkle24Regular;
      