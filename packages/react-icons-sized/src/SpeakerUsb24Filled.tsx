import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4.25a1.25 1.25 0 00-2.06-.96L7.98 7.5H4.25C3.01 7.5 2 8.52 2 9.76v4.5c0 1.24 1 2.25 2.25 2.25h3.73l4.96 4.2a1.25 1.25 0 002.06-.95V4.25z" fill={primaryFill} /><path d="M16.5 8.25c0-.41.33-.75.75-.75h3.5c.42 0 .75.34.75.75v1.8c.3.1.5.38.5.7v5c0 .42-.34.75-.75.75h-.24v2.75a.75.75 0 01-1.5 0V16.5h-.98v2.75a.75.75 0 01-1.5 0V16.5h-.28a.75.75 0 01-.75-.75v-5c0-.32.2-.6.5-.7v-1.8zm4 3.25h-3V15h3v-3.5zM18 9v1h2V9h-2z" fill={primaryFill} /></svg>;
}

const SpeakerUsb24Filled = wrapIcon(rawSvg({}), 'SpeakerUsb24Filled');
export default SpeakerUsb24Filled;
      