import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65zm0 1.5H6.25c-.38 0-.7.28-.74.65l-.01.1v15.5c0 .38.28.7.65.74h11.6c.38 0 .7-.27.74-.64l.01-.1V4.25c0-.38-.28-.7-.65-.74h-.1z" fill={primaryFill} /><path d="M7 15.75c0-.41.34-.75.75-.75h8.5a.75.75 0 110 1.5h-8.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M7 7.75c0-.41.34-.75.75-.75h8.5a.75.75 0 110 1.5h-8.5A.75.75 0 017 7.75z" fill={primaryFill} /><path d="M7 11.75c0-.41.34-.75.75-.75h8.5a.75.75 0 110 1.5h-8.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const DocumentOnePage24Regular = wrapIcon(rawSvg({}), 'DocumentOnePage24Regular');
export default DocumentOnePage24Regular;
      