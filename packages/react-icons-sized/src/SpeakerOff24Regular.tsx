import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L6.44 7.5H4.25C3.01 7.5 2 8.5 2 9.75v4.5c0 1.24 1 2.25 2.25 2.25h3.68c.18 0 .36.06.5.19l4.49 3.99c.8.72 2.08.14 2.08-.93v-3.69l5.72 5.72a.75.75 0 001.06-1.06L3.28 2.22zM13.5 14.56v4.63l-4.08-3.63A2.25 2.25 0 007.93 15H4.25a.75.75 0 01-.75-.75v-4.5c0-.42.34-.75.75-.75h3.68l5.57 5.56z" fill={primaryFill} /><path d="M13.5 4.8v5.52l1.5 1.5V4.25a1.25 1.25 0 00-2.08-.93l-3.4 3.02 1.06 1.06 2.92-2.6z" fill={primaryFill} /><path d="M17.14 13.96l1.14 1.14a6.97 6.97 0 00-.12-6.43.75.75 0 00-1.32.72 5.47 5.47 0 01.3 4.57z" fill={primaryFill} /><path d="M19.39 16.2l1.1 1.1a9.96 9.96 0 00-.45-11.25.75.75 0 00-1.2.9 8.46 8.46 0 01.55 9.26z" fill={primaryFill} /></svg>;
}

const SpeakerOff24Regular = wrapIcon(rawSvg({}), 'SpeakerOff24Regular');
export default SpeakerOff24Regular;
      