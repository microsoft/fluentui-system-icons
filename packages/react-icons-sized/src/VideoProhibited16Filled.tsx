import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2.5a2 2 0 012 2v.52a5.5 5.5 0 00-4.9 6.48H4a2 2 0 01-2-2v-5c0-1.1.9-2 2-2h4zm6 3.76V4.24c0-.66-.79-1-1.27-.54L11.3 5.06c1.01.15 1.94.57 2.7 1.2zM6 10.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const VideoProhibited16Filled = wrapIcon(rawSvg({}), 'VideoProhibited16Filled');
export default VideoProhibited16Filled;
      