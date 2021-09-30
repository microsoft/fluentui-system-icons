import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 19a2.75 2.75 0 01-2.74-2.58L5 16.25V15a3 3 0 112.56-4.56c.51-.25 1.08-.4 1.68-.43L9.5 10h4.25l.24.03.13.01.11-.16.13-.18-1.78-1.78a2 2 0 01-.22-2.57l.1-.13.12-.13a2 2 0 012.7-.12l.14.12 5.4 5.41a4 4 0 01-2.63 6.83H17.78l-.03.06a2.75 2.75 0 01-2.14 1.59l-.19.01-.17.01h-7.5zm6.6-12.85a.5.5 0 00-.76.64l.05.07 2.81 2.81-.64.64c-.2.21-.38.45-.52.7l-.1.19-.26.58-.62-.17c-.2-.05-.4-.09-.6-.1l-.21-.01h-4c-.7 0-1.34.24-1.85.64l-.15.12-.16.16-.1.1-.1.13-.13.17-.04.06-.11.2-.06.11-.06.14-.04.08-.05.15-.05.18-.06.3-.02.08-.01.19-.01.19v1.75c0 .65.5 1.18 1.12 1.24l.13.01H12v-.25c0-.64-.49-1.18-1.12-1.24H9.75a.75.75 0 01-.1-1.5h1.1a2.75 2.75 0 012.75 2.58V17.5h1.75c.6 0 1.1-.41 1.22-.98l.02-.12.1-.84.82.2a2.5 2.5 0 002.48-4.07l-.12-.13-5.41-5.4zM5 10.5a1.5 1.5 0 00-.14 3h.25v-.03l.14-.44.1-.25.1-.24.05-.11.14-.24.08-.14.15-.2.07-.1.11-.14.13-.15.15-.15a1.5 1.5 0 00-1.04-.78l-.15-.02L5 10.5z" fill={primaryFill} /></svg>;
}

const AnimalRabbit24Regular = wrapIcon(rawSvg({}), 'AnimalRabbit24Regular');
export default AnimalRabbit24Regular;
      