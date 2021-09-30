import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6a6.14 6.14 0 015.8 4.12l.07.24.05.14h2.33a2.75 2.75 0 012.74 2.58v1.17c0 .92-.7 1.67-1.6 1.74h-1.77l.24.6c.35.84-.01 1.8-.81 2.21l-.14.07c-.16.06-.32.1-.5.12h-1.95c-.63 0-1.2-.33-1.51-.86l-.08-.14-.53-1.14h.05c-1.4.18-2.82.2-4.22.06l-.5-.06L8.14 18c-.3.61-.9 1-1.59 1h-1.8a1.75 1.75 0 01-1.62-2.41l.44-1.05A3.24 3.24 0 012 12.75c0-.38.28-.7.64-.74l.1-.01h1.89l.5-1.64A6.14 6.14 0 0111 6zm6.77 9.7c-.77.3-1.55.56-2.35.76l-.55.12.36.78c.03.05.07.09.12.11l.05.02h1.84l.1-.01c.1-.04.17-.15.15-.26l-.02-.07L17 16h-.05l.42-.15.4-.16zm-13.55 0l.4.14.38.14-.48 1.17a.25.25 0 00.23.34h1.86a.25.25 0 00.17-.14l.36-.76h.04c-1-.2-2-.51-2.96-.9zM11 7.5a4.64 4.64 0 00-4.37 3.08l-.07.21-1.14 3.75.17.06a16.67 16.67 0 0010.41.13l.41-.13.16-.06-1.13-3.75a4.64 4.64 0 00-4-3.27l-.23-.02H11zM4.02 14l.15-.5h-.5l.02.05c.09.17.2.32.33.45zm13.35-2l.76 2.5h2.12c.11 0 .21-.08.24-.2v-1.05c0-.65-.49-1.18-1.12-1.24h-.12L17.37 12z" fill={primaryFill} /></svg>;
}

const AnimalTurtle24Regular = wrapIcon(rawSvg({}), 'AnimalTurtle24Regular');
export default AnimalTurtle24Regular;
      