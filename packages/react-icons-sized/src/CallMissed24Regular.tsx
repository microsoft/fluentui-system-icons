import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.01 2.5c3.95 0 6.88.84 8.78 2.57.95.86 1.4 2.16 1.17 3.42l-.04.2-.2.82a2.75 2.75 0 01-2.95 2.11l-1.75-.18a2.75 2.75 0 01-2.4-2.11l-.4-1.69a.25.25 0 00-.1-.16 4.66 4.66 0 00-2.1-.32c-1.47 0-2.16.23-2.2.4l-.4 1.77a2.75 2.75 0 01-2.4 2.11l-1.75.18a2.75 2.75 0 01-2.96-2.1l-.2-.81a3.75 3.75 0 011.14-3.65C5.15 3.34 8.08 2.5 12 2.5zm0 1.5c-3.6 0-6.17.73-7.75 2.17-.61.55-.87 1.39-.68 2.19l.2.82c.14.6.71 1.01 1.34.95l1.74-.18c.53-.05.97-.44 1.1-.96l.4-1.78c.27-1.13 1.53-1.55 3.65-1.55 1.32 0 2.27.17 2.88.54.4.25.7.64.8 1.1L16.08 9c.12.52.56.9 1.09.96l1.75.18c.63.06 1.2-.35 1.35-.96l.19-.82.03-.17c.12-.74-.15-1.5-.7-2C18.18 4.74 15.61 4 12 4z" fill={primaryFill} /><path d="M12.5 14.75a.75.75 0 00-1.5 0v2.5c0 .41.34.75.75.75h1.75a.75.75 0 000-1.5h-1v-1.75z" fill={primaryFill} /><path d="M6.5 16.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm5.5-4a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const CallMissed24Regular = wrapIcon(rawSvg({}), 'CallMissed24Regular');
export default CallMissed24Regular;
      