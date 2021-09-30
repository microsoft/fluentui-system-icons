import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.74 2c1.2 0 2.17.92 2.25 2.1v15.65c0 1.18-.92 2.16-2.1 2.24H6.25c-1.19 0-2.16-.92-2.24-2.1V4.25C4 3.07 4.91 2.09 6.1 2h11.64zm0 1.5H6.24c-.38 0-.69.28-.74.64v15.6c0 .38.28.7.64.75h11.6c.38 0 .7-.28.75-.64V4.25c0-.38-.28-.7-.64-.75h-.1z" fill={primaryFill} /><path d="M13.02 16.02a.75.75 0 01-.62-.86l.1-.66h-1.48l-.14.9a.75.75 0 11-1.48-.24l.1-.66h-.75a.75.75 0 010-1.5h.99l.23-1.5h-.72a.75.75 0 010-1.5h.96l.2-1.26a.75.75 0 111.48.24L11.73 10h1.48l.2-1.26a.75.75 0 111.48.24L14.73 10h.52a.75.75 0 010 1.5h-.76l-.23 1.5h.49a.75.75 0 010 1.5h-.73l-.14.9a.75.75 0 01-.86.62zm-1.53-4.52l-.23 1.5h1.48l.23-1.5H11.5z" fill={primaryFill} /></svg>;
}

const DocumentPageNumber24Regular = wrapIcon(rawSvg({}), 'DocumentPageNumber24Regular');
export default DocumentPageNumber24Regular;
      