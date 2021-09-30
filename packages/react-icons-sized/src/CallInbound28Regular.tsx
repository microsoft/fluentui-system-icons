import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.78 3.28a.75.75 0 00-1.06-1.06l-8.22 8.22V4.25a.75.75 0 00-1.5 0v8c0 .41.34.75.75.75h8a.75.75 0 000-1.5h-6.19l8.22-8.22z" fill={primaryFill} /><path d="M8.06 2.08a5.91 5.91 0 00-3.97.8 4.3 4.3 0 00-2.02 3.44c-.15 2.66.34 6.33 2.78 10.55a24.42 24.42 0 007.74 8.34c2.8 1.83 6.12.32 7.57-2.4.43-.82.43-1.8-.02-2.61l-1.26-2.32a3.75 3.75 0 00-4.53-1.75l-1.66.58c-.4.14-.74.06-.92-.12a9.88 9.88 0 01-2.39-4.29c-.06-.27.05-.6.36-.88l1.27-1.08a3.25 3.25 0 00.79-3.92L10.4 3.6a2.75 2.75 0 00-2.1-1.5l-.24-.03zm-4.5 4.33A2.8 2.8 0 014.9 4.14c.79-.5 1.85-.72 2.96-.57l.24.03c.41.06.77.31.95.68l1.4 2.81c.37.72.19 1.59-.42 2.11l-1.26 1.08a2.4 2.4 0 00-.85 2.38 11.36 11.36 0 002.79 5c.7.68 1.69.74 2.47.47l1.66-.58c1.04-.36 2.2.08 2.72 1.05l1.27 2.31c.2.37.2.82 0 1.19-1.16 2.2-3.56 3.06-5.42 1.85-2.22-1.46-4.99-3.89-7.26-7.82-2.29-3.97-2.72-7.34-2.58-9.72z" fill={primaryFill} /></svg>;
}

const CallInbound28Regular = wrapIcon(rawSvg({}), 'CallInbound28Regular');
export default CallInbound28Regular;
      