import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7L18.21 6.5l1.64-1.65a.5.5 0 00-.7-.7L17.5 5.79l-1.65-1.64zm2.65 15.6v-6.83a6.45 6.45 0 001.5-.42v7.24c0 1.2-.93 2.17-2.1 2.25H6.25c-1.2 0-2.17-.92-2.25-2.1V4.25C4 3.06 4.92 2.09 6.1 2h6.71c-.42.44-.79.94-1.08 1.5H6.25c-.38 0-.7.28-.75.64v15.6c0 .38.28.7.64.75h11.6c.38 0 .7-.28.75-.64v-.1zM8.5 16a1.5 1.5 0 000 3h7a1.5 1.5 0 100-3h-7z" fill={primaryFill} /></svg>;
}

const DocumentFooterDismiss24Regular = wrapIcon(rawSvg({}), 'DocumentFooterDismiss24Regular');
export default DocumentFooterDismiss24Regular;
      