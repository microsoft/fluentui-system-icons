import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /><path d="M2 13a2 2 0 012-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 009 17l.6-.01c.17.34.37.66.61.95-.4.04-.8.06-1.21.06a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 012 13z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const PersonDelete20Regular = wrapIcon(rawSvg({}), 'PersonDelete20Regular');
export default PersonDelete20Regular;
      