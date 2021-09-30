import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.2 2.15l.08.07 18.5 18.5a.75.75 0 01-.98 1.13l-.08-.07-3.5-3.5c-.45.11-.9.19-1.37.21l-.35.01H8.56l1.9 1.9.07.08a.75.75 0 01-1.04 1.05l-.09-.07-3.18-3.18-.07-.08a.75.75 0 010-.9l.07-.08 3.18-3.18.08-.07c.26-.2.63-.2.9 0l.08.07.07.07c.2.27.2.63 0 .9l-.07.09-1.9 1.9h6.94c.14 0 .28 0 .42-.02L6.4 7.46a5 5 0 00-1.6 7.9.75.75 0 11-1.11 1A6.47 6.47 0 015.3 6.36L2.22 3.28a.75.75 0 01.98-1.13zm16.55 5.23c.22 0 .42.1.55.24a6.47 6.47 0 01-.75 9.46l-1.06-1.07a5 5 0 00.69-7.4.75.75 0 01.57-1.24zM14.53 2.4l.08.07 3.18 3.18c.27.27.3.7.07.99l-.07.07-3.18 3.18a.75.75 0 01-1.13-.98l.07-.08L15.38 7h-5.9L7.98 5.52l.28-.02h7.25l-1.97-1.97a.75.75 0 01-.07-.98l.07-.08c.27-.27.69-.3.98-.07z" fill={primaryFill} /></svg>;
}

const ArrowRepeatAllOff24Regular = wrapIcon(rawSvg({}), 'ArrowRepeatAllOff24Regular');
export default ArrowRepeatAllOff24Regular;
      