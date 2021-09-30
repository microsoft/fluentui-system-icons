import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4A2.5 2.5 0 002 6.5v3.76c.3-.26.64-.48 1-.66V6.5C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-.52c-.03.34-.1.68-.19 1h.71a2.5 2.5 0 002.5-2.5v-1l2.4 1.8a1 1 0 001.6-.8v-7a1 1 0 00-1.6-.8L14 7.5v-1A2.5 2.5 0 0011.5 4h-7zM14 8.75l3-2.25v7l-3-2.25v-2.5zm-4 5.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5z" fill={primaryFill} /></svg>;
}

const VideoAdd20Regular = wrapIcon(rawSvg({}), 'VideoAdd20Regular');
export default VideoAdd20Regular;
      