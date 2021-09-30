import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.61 1.46l1.93 1.93a1.5 1.5 0 01-.4 2.4l-1.65.8a1 1 0 00-.51.58l-.38 1.1a1 1 0 01-1.65.38L3 7.71 1.7 9H1v-.7L2.3 7l-.96-.95a1 1 0 01.39-1.65l1.1-.38a1 1 0 00.57-.5l.8-1.66a1.5 1.5 0 012.41-.4zM2 11.5V9.93l.95-.96.44.43c.94.95 2.56.58 3-.69l.44-1.28 1.9-.92a2.27 2.27 0 00.6-3.65L8.47 2h3.03A2.5 2.5 0 0114 4.5V8h-3.5A2.5 2.5 0 008 10.5V14H4.5A2.5 2.5 0 012 11.5zm7 2.36c.35-.12.67-.32.94-.6l3.33-3.32c.27-.27.47-.59.59-.94H10.5C9.67 9 9 9.67 9 10.5v3.36z" fill={primaryFill} /></svg>;
}

const NotePin16Filled = wrapIcon(rawSvg({}), 'NotePin16Filled');
export default NotePin16Filled;
      