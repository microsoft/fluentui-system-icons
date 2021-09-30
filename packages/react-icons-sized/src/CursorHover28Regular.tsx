import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A2.75 2.75 0 014.75 5h18.5A2.75 2.75 0 0126 7.75v11.5A2.75 2.75 0 0123.25 22h-.07c.15-.51.06-1.06-.24-1.5h.31c.69 0 1.25-.56 1.25-1.25V7.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25h6V22h-6A2.75 2.75 0 012 19.25V7.75z" fill={primaryFill} /><path d="M13.03 11.97a.75.75 0 00-1.28.53v12.75a.75.75 0 001.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.7.67a.75.75 0 00.63-1.27l-9-9zm.22 11.2v-8.86l6.13 6.13-2.47-.35c-.6-.09-1.2.14-1.6.6l-2.06 2.49z" fill={primaryFill} /></svg>;
}

const CursorHover28Regular = wrapIcon(rawSvg({}), 'CursorHover28Regular');
export default CursorHover28Regular;
      