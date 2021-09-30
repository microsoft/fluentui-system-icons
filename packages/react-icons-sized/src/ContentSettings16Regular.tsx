import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v1.76a5.5 5.5 0 00-1-.66V5H3v6.5c0 .83.67 1.5 1.5 1.5h1.1c.19.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7zM3.09 4h9.83c-.2-.58-.76-1-1.42-1h-7c-.65 0-1.2.42-1.41 1zM4.5 6h2.83c-.4.28-.77.62-1.08 1H5v3.28a5.6 5.6 0 000 .44V11h.01c.03.34.1.68.19 1h-.7a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5zm2 2.72l.35.35a2 2 0 010 2.86l-.35.35c.13.31.29.6.48.87l.4-.11a2 2 0 012.52 1.45l.11.48a4.26 4.26 0 00.96 0l.12-.48a2 2 0 012.52-1.45l.4.11c.19-.27.35-.56.48-.87l-.36-.35a2 2 0 010-2.86l.36-.35c-.13-.31-.3-.6-.48-.87l-.4.11a2 2 0 01-2.52-1.45l-.12-.48a4.25 4.25 0 00-.96 0l-.11.48a2 2 0 01-2.52 1.45l-.4-.11c-.2.27-.35.56-.48.87zm4 2.78a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const ContentSettings16Regular = wrapIcon(rawSvg({}), 'ContentSettings16Regular');
export default ContentSettings16Regular;
      