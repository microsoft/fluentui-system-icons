import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 4c-1.41-.01-2.63.96-3.2 1.49-.23.21-.48.38-.74.46l-.41.14L7.5 4.28a1.6 1.6 0 00-2.17 2.3l.7.88-1.28.43-.6-1.23C3.65 5.57 2 5.95 2 7.16v2.99c0 1.2 1.18 2.04 2.32 1.65l3.02-1.04-.3 1.46c-.3 1.56 1.7 2.47 2.66 1.21l3.1-4 4.18-1.35c.84-.27 1.33-1.28.74-2.1-.6-.8-1.7-1.97-3.22-1.98zM7.04 7.13l-.9-1.17a.6.6 0 01.8-.86L8.96 6.5l-1.92.64zm4.94-.91c.55-.51 1.51-1.23 2.52-1.22 1 0 1.85.8 2.41 1.58.07.1.08.2.04.3-.04.1-.13.2-.28.25l-4.32 1.4a.5.5 0 00-.25.16l-3.19 4.13c-.32.42-.99.12-.88-.4l.29-1.47a1 1 0 00-1.3-1.14l-3.03 1.04c-.48.17-.99-.19-.99-.7V7.16c0-.05.02-.08.03-.1a.15.15 0 01.08-.04l.1.01.06.07.78 1.62c.1.22.37.33.6.25l6.23-2.07c.43-.14.8-.4 1.1-.68z" fill={primaryFill} /><path d="M2.5 17a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /></svg>;
}

const AirplaneTakeOff20Regular = wrapIcon(rawSvg({}), 'AirplaneTakeOff20Regular');
export default AirplaneTakeOff20Regular;
      