import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.7 1.04a.5.5 0 00-.4.92l.28.15a7.21 7.21 0 012.49 2.48c1.02 1.7.95 3.52.93 3.86v.05a.5.5 0 001 0v-.02a7.87 7.87 0 00-.06-1.43 7.8 7.8 0 00-4.24-6z" fill={primaryFill} /><path d="M10.8 3.6a.5.5 0 10-.57.82 3.53 3.53 0 011.54 2.83.5.5 0 001 0v-.06a3.35 3.35 0 00-.06-.61A4.6 4.6 0 0011.31 4c-.28-.26-.52-.41-.52-.41z" fill={primaryFill} /><path d="M2.54 10.7a4 4 0 016.93-4l.82 1.43 1.9 1.38a.5.5 0 01-.04.84l-2.53 1.46-2.74 1.58-2.53 1.46a.5.5 0 01-.74-.38l-.25-2.34-.82-1.42zm.86-.5l.88 1.52a.5.5 0 01.06.2l.18 1.68 6.46-3.73-1.37-1a.5.5 0 01-.14-.15L8.6 7.2a3 3 0 00-5.2 3z" fill={primaryFill} /><path d="M7.25 14.34a1.75 1.75 0 003-1.74l-3 1.74z" fill={primaryFill} /></svg>;
}

const AlertUrgent16Regular = wrapIcon(rawSvg({}), 'AlertUrgent16Regular');
export default AlertUrgent16Regular;
      