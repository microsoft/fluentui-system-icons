import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.9 13.2l-.19.82a2.75 2.75 0 01-2.95 2.1L17 15.96a2.75 2.75 0 01-2.4-2.12l-.39-1.69a.25.25 0 00-.11-.15 4.66 4.66 0 00-2.1-.32 6.5 6.5 0 00-1.79.19 2 2 0 00-.3.11l-.09.05-.01.04-.41 1.77A2.75 2.75 0 017 15.95l-1.75.18a2.75 2.75 0 01-2.95-2.1l-.2-.82a3.75 3.75 0 011.13-3.65C5.13 7.84 8.06 7 12 7c3.94 0 6.88.84 8.78 2.57a3.75 3.75 0 011.17 3.41l-.05.22zm-1.42-.51c.11-.74-.15-1.5-.71-2.01C18.18 9.24 15.6 8.5 12 8.5c-3.6 0-6.18.74-7.76 2.17-.6.55-.87 1.4-.68 2.2l.2.81c.14.6.72 1.02 1.34.95l1.75-.17c.53-.06.97-.45 1.09-.97l.42-1.82.04-.13c.38-1 1.6-1.37 3.6-1.37 1.32 0 2.27.16 2.88.54.4.24.69.64.8 1.1l.38 1.68c.12.52.56.91 1.1.96l1.75.18c.62.07 1.2-.34 1.34-.95l.2-.82.03-.17z" fill={primaryFill} /></svg>;
}

const CallEnd24Regular = wrapIcon(rawSvg({}), 'CallEnd24Regular');
export default CallEnd24Regular;
      