import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1.75a.75.75 0 011.5 0v1.27a2 2 0 011.24.57l3.53 3.54a2 2 0 010 2.83l-4.24 4.24a2 2 0 01-2.83 0l-3.54-3.54a2 2 0 010-2.82l4.25-4.25.09-.08V1.75zm0 4.5v-.63l-2.89 2.9h8.25a.5.5 0 00-.15-.33l-3.54-3.54a.5.5 0 00-.17-.11v1.71a.75.75 0 11-1.5 0zm-2.87 3.76l3.13 3.13c.2.2.51.2.7 0L13.1 10H6.13z" fill={primaryFill} /><path d="M6.59 14H4.5A2.5 2.5 0 002 16.5v3A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-3a2.5 2.5 0 00-2.02-2.45 3.5 3.5 0 01-.17 1.5c.4.13.69.5.69.95v3a1 1 0 01-1 1h-15a1 1 0 01-1-1v-3a1 1 0 011-1h3.83a3 3 0 01-.84-.6l-.9-.9z" fill={primaryFill} /><path d="M14 14.38c0-.5.15-.98.34-1.39.2-.41.44-.8.68-1.13.23-.33.47-.61.64-.81l.3-.32.01-.01c.3-.3.77-.3 1.06 0l.3.33A6.98 6.98 0 0118.66 13c.2.4.35.88.35 1.38 0 1.39-1.03 2.62-2.5 2.62S14 15.77 14 14.37zm2.77-1.65a8.42 8.42 0 00-.27-.35 8.42 8.42 0 00-.8 1.24c-.14.3-.2.56-.2.76 0 .69.48 1.12 1 1.12s1-.43 1-1.13c0-.19-.06-.44-.2-.75a5.5 5.5 0 00-.53-.89z" fill={primaryFill} /></svg>;
}

const ColorFill24Regular = wrapIcon(rawSvg({}), 'ColorFill24Regular');
export default ColorFill24Regular;
      