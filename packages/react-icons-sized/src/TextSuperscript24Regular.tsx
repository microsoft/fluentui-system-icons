import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.74 3.5c-.55 0-.99.5-.99 1.02a.75.75 0 01-1.5 0 2.53 2.53 0 014.64-1.4c.49.75.5 1.72-.06 2.67-.29.48-.67.85-1.05 1.14-.18.15-.37.28-.55.41l-.08.06-.43.3c-.36.28-.62.52-.78.8h2.51a.75.75 0 010 1.5H17a.75.75 0 01-.75-.75c0-1.4.82-2.18 1.56-2.74l.48-.34.07-.05.5-.37c.3-.24.53-.47.68-.72.3-.53.23-.89.09-1.1a1.06 1.06 0 00-.9-.43z" fill={primaryFill} /><path d="M15.26 4.71c.06.56.38 1.04.85 1.32L10.99 12l5.58 6.51a.75.75 0 11-1.14.98L10 13.15 4.57 19.5a.75.75 0 01-1.14-.98L9.01 12 3.43 5.49a.75.75 0 111.14-.98L10 10.85l5.26-6.14z" fill={primaryFill} /></svg>;
}

const TextSuperscript24Regular = wrapIcon(rawSvg({}), 'TextSuperscript24Regular');
export default TextSuperscript24Regular;
      