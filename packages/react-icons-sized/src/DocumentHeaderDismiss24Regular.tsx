import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.19 0 2.16.92 2.24 2.1v7.4c-.47-.2-.97-.34-1.5-.42V4.25c0-.38-.28-.7-.64-.74l-.1-.01H6.25c-.38 0-.7.28-.74.65l-.01.1v15.5c0 .37.28.69.65.74h5.58c.29.56.65 1.06 1.08 1.5H6.25c-1.2 0-2.17-.92-2.24-2.1L4 19.75V4.25c0-1.2.92-2.17 2.1-2.24L6.25 2h11.5zM8.5 5a1.5 1.5 0 000 3h7a1.5 1.5 0 000-3h-7zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const DocumentHeaderDismiss24Regular = wrapIcon(rawSvg({}), 'DocumentHeaderDismiss24Regular');
export default DocumentHeaderDismiss24Regular;
      