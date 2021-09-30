import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.75a.75.75 0 00-1.43-.3 1.45 1.45 0 01-.07.13c-.05.1-.13.23-.24.38-.22.32-.52.66-.9.9a.75.75 0 10.79 1.28l.35-.25v2.36a.75.75 0 001.5 0v-4.5z" fill={primaryFill} /><path d="M20.5 18.75a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h9c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M20.5 12.24a.75.75 0 00-.75-.75h-9a.75.75 0 100 1.5h9c.41 0 .75-.33.75-.75z" fill={primaryFill} /><path d="M20.5 5.75a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h9c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M5.15 10.52c-.3-.05-.68.07-.87.26a.75.75 0 11-1.06-1.06 2.57 2.57 0 012.2-.68c.39.07.8.26 1.1.6A2 2 0 017 11c0 .62-.27 1.08-.6 1.42-.28.28-.64.51-.91.69l-.08.05c-.2.13-.36.24-.48.34h1.32a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75c0-1.31.98-1.95 1.58-2.34l.06-.04c.31-.2.53-.34.68-.5.14-.14.18-.24.18-.37 0-.22-.06-.32-.1-.36a.42.42 0 00-.25-.12z" fill={primaryFill} /><path d="M2.97 21.28s.1.08 0 0l.01.01.01.01a1.43 1.43 0 00.15.13A3.24 3.24 0 005 22c.64 0 1.2-.18 1.6-.54.4-.36.61-.86.6-1.36-.02-.42-.17-.8-.43-1.1a1.73 1.73 0 00-.17-2.46C6.2 16.18 5.64 16 5 16a3.24 3.24 0 00-1.86.57 1.95 1.95 0 00-.15.13l-.01.01-.01.01a.75.75 0 001.05 1.07l.02-.02.17-.1c.16-.08.42-.17.79-.17.36 0 .54.1.6.16.08.07.1.13.1.2 0 .06-.04.14-.13.22-.09.08-.26.17-.57.17a.75.75 0 000 1.5c.31 0 .48.1.57.17.1.08.12.16.13.23 0 .06-.02.12-.1.19-.06.06-.24.16-.6.16a1.75 1.75 0 01-.96-.27.75.75 0 10-1.07 1.05zm0-4.56s.2-.17 0 0z" fill={primaryFill} /></svg>;
}

const TextNumberListLtr24Regular = wrapIcon(rawSvg({}), 'TextNumberListLtr24Regular');
export default TextNumberListLtr24Regular;
      