import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.8 11.52l3.35 3.33a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L5.5 6.21V8a2.5 2.5 0 003.88 2.09l.72.71A3.5 3.5 0 014.5 8a.5.5 0 10-1 0 4.5 4.5 0 004 4.47v1.03a.5.5 0 101 0v-1.03c.87-.1 1.66-.44 2.3-.95zM8.66 9.35A1.5 1.5 0 016.5 8v-.8l2.15 2.15z" fill={primaryFill} /><path d="M9.5 7.38V4.5a1.5 1.5 0 00-3-.12l-.82-.82a2.5 2.5 0 014.82.94V8c0 .12 0 .24-.02.35l-.98-.97z" fill={primaryFill} /><path d="M12.06 9.94l-.76-.76c.13-.37.2-.77.2-1.18a.5.5 0 011 0c0 .7-.16 1.35-.44 1.94z" fill={primaryFill} /></svg>;
}

const MicOff16Regular = wrapIcon(rawSvg({}), 'MicOff16Regular');
export default MicOff16Regular;
      