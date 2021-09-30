import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4.25a1.25 1.25 0 00-2.08-.93l-4.5 4a.75.75 0 01-.5.18H4.26C3.01 7.5 2 8.5 2 9.75v4.5c0 1.24 1 2.25 2.25 2.25h3.68c.18 0 .36.06.5.19l3.12 2.77c.14-.5.39-.96.72-1.36l-2.85-2.54a2.25 2.25 0 00-1.5-.56H4.26a.75.75 0 01-.75-.75v-4.5c0-.41.34-.75.75-.75h3.68c.55 0 1.08-.2 1.5-.57l4.07-3.62v12.04l1.5-1.5V4.25zm5.04 1.8a9.95 9.95 0 011.93 5.2 3.3 3.3 0 00-1.53-.24 8.45 8.45 0 00-1.6-4.06.75.75 0 111.2-.9zm-1.88 2.62c.46.85.75 1.81.82 2.82-.2.13-.4.3-.59.47l-.97.97a5.54 5.54 0 00-.58-3.54.75.75 0 111.32-.72zm.94 4l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.28 2.28 0 10-3.23-3.24z" fill={primaryFill} /></svg>;
}

const SpeakerEdit24Regular = wrapIcon(rawSvg({}), 'SpeakerEdit24Regular');
export default SpeakerEdit24Regular;
      