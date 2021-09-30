import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 8h.12l-.13.33-.05.13v.02c-.06.17-.09.35-.09.52H4.5a.5.5 0 00-.5.5v.5c0 1.44 1.43 3 4 3 .3 0 .6-.02.88-.06-.15.32-.2.68-.17 1.02-.23.03-.46.04-.71.04-3.14 0-5-2.03-5-4v-.5C3 8.67 3.67 8 4.5 8h7z" fill={primaryFill} /><path d="M11.2 12.24l.74.25.12.04a3.28 3.28 0 001.25-2.01l.02-.17-.72-.68a.88.88 0 01-.22-.9l.03-.08.32-.76a.78.78 0 01.88-.49l.08.02.4.13c.4.13.72.48.82.91.24 1.04-.05 2.3-.86 3.78-.8 1.48-1.69 2.37-2.65 2.67-.37.12-.77.03-1.07-.22l-.08-.08-.31-.3a.88.88 0 01-.15-1.04l.05-.07.47-.69a.79.79 0 01.8-.33l.08.02z" fill={primaryFill} /><path d="M8 1.5A2.75 2.75 0 118 7a2.75 2.75 0 010-5.5zm0 1A1.75 1.75 0 108 6a1.75 1.75 0 000-3.5z" fill={primaryFill} /></svg>;
}

const PersonCall16Regular = wrapIcon(rawSvg({}), 'PersonCall16Regular');
export default PersonCall16Regular;
      