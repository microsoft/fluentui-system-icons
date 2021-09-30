import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4.25a1.25 1.25 0 00-2.08-.93L8.42 7.3a.75.75 0 01-.49.19H4.25C3.01 7.5 2 8.5 2 9.75v4.5c0 1.24 1 2.25 2.25 2.25h3.68c.18 0 .36.06.5.19l4.49 3.99c.8.72 2.08.14 2.08-.93V4.25z" fill={primaryFill} /><path d="M16.22 9.22c.3-.3.77-.3 1.06 0L19 10.94l1.72-1.72a.75.75 0 111.06 1.06L20.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L19 13.06l-1.72 1.72a.75.75 0 11-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const SpeakerMute24Filled = wrapIcon(rawSvg({}), 'SpeakerMute24Filled');
export default SpeakerMute24Filled;
      