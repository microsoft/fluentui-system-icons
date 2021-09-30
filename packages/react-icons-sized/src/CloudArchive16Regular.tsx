import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 4c-.48.6-.7 1.35-.7 2a.5.5 0 01-.5.5C2.69 6.5 2 7.76 2 8.5c0 .43.1.92.44 1.3.32.36.91.7 2.06.7h2.18c.1.09.2.17.32.23v.77H4.5c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 011 8.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15A3.82 3.82 0 018 2c.85 0 1.84.28 2.63.93a3.73 3.73 0 011.35 2.6c.69.08 1.35.34 1.89.75.26.2.5.44.67.72h-1.38a2.95 2.95 0 00-1.66-.5.5.5 0 01-.5-.5c0-1.1-.43-1.83-1-2.3A3.23 3.23 0 008 3c-1.1 0-1.83.43-2.3 1zM7 9a1 1 0 011-1h7a1 1 0 110 2H8a1 1 0 01-1-1zm6 7a2 2 0 002-2v-3H8v3c0 1.1.9 2 2 2h3zm-2.5-4h2a.5.5 0 010 1h-2a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CloudArchive16Regular = wrapIcon(rawSvg({}), 'CloudArchive16Regular');
export default CloudArchive16Regular;
      