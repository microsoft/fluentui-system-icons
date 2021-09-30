import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.61 1.46l1.93 1.93a1.5 1.5 0 01-.4 2.4l-1.65.8a1 1 0 00-.51.58l-.38 1.1a1 1 0 01-1.65.38L3 7.71 1.7 9H1v-.7L2.3 7l-.96-.95a1 1 0 01.39-1.65l1.1-.38a1 1 0 00.57-.5l.8-1.66a1.5 1.5 0 012.41-.4zM2 11.5V9.93l.95-.96.05.05v2.48c0 .83.67 1.5 1.5 1.5H8v-2.5A2.5 2.5 0 0110.5 8H13V4.5c0-.83-.67-1.5-1.5-1.5H9.46l-.13-.14L8.47 2h3.03A2.5 2.5 0 0114 4.5v3.67c0 .66-.26 1.3-.73 1.77l-3.33 3.33a2.5 2.5 0 01-1.77.73H4.5A2.5 2.5 0 012 11.5zm7 1.25c.08-.05.16-.12.23-.19l3.33-3.33.2-.23H10.5C9.67 9 9 9.67 9 10.5v2.25z" fill={primaryFill} /></svg>;
}

const NotePin16Regular = wrapIcon(rawSvg({}), 'NotePin16Regular');
export default NotePin16Regular;
      