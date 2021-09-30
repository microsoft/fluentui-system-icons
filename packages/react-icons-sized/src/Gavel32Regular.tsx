import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.78 3.63a3.5 3.5 0 00-5.35-.48L9.31 7.28a3.5 3.5 0 00.67 5.47l2.96 1.78-9.95 9.76a3.35 3.35 0 104.71 4.76l9.85-9.85 1.75 2.9a3.5 3.5 0 005.4.75l4.08-3.84a3.5 3.5 0 00-.28-5.34l-5.64-4.28a1 1 0 01-.22-.22l-3.86-5.54zm-3.93.94a1.5 1.5 0 012.29.2l.69.99-5.86 5.86-.96-.58a1.5 1.5 0 01-.29-2.35l4.13-4.12zm-1.11 8.1l5.25-5.24 2 2.88a3 3 0 00.66.68l2.53 1.92-5.04 5.04-1.52-2.54a3 3 0 00-1.03-1.02l-2.85-1.71zm6.46 7.05l5.59-5.6 1.5 1.14c.74.56.8 1.65.12 2.29l-4.08 3.84c-.7.66-1.83.5-2.32-.32l-.81-1.35zm-3.7-2.3L6.28 27.64a1.35 1.35 0 11-1.9-1.9l10.32-10.14.85.51a1 1 0 01.34.34l.6.99z" fill={primaryFill} /><path d="M19 26a1 1 0 100 2h-2a1 1 0 100 2h11.33a1 1 0 100-2H26a1 1 0 100-2h-7z" fill={primaryFill} /></svg>;
}

const Gavel32Regular = wrapIcon(rawSvg({}), 'Gavel32Regular');
export default Gavel32Regular;
      