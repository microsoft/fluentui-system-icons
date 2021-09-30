import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7.57c.04-.82.24-1.59.58-2.28L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7L14.3 15h-1.8v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57zM13.3 14L5.34 6.05a4.6 4.6 0 00-.32 1.33L5 7.6V11.5l-.04.2L4 14h9.3zm-1.8 1h-3v.14a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15z" fill={primaryFill} /><path d="M15.04 11.7l.87 2.1.86.84c.15-.17.23-.4.23-.64v-.13l-.02-.08a1 1 0 00-.06-.17L16 11.4V7.58l-.02-.22A5.92 5.92 0 0010 2a6.1 6.1 0 00-4.21 1.66l.7.71A5.1 5.1 0 0110 3a4.9 4.9 0 015 4.6l.01.21v3.69l.04.2z" fill={primaryFill} /></svg>;
}

const AlertOff20Regular = wrapIcon(rawSvg({}), 'AlertOff20Regular');
export default AlertOff20Regular;
      