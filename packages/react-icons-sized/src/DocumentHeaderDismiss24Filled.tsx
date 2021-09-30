import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.19 0 2.16.92 2.24 2.1v7.4A6.5 6.5 0 0012.8 22H6.26c-1.2 0-2.17-.93-2.24-2.1L4 19.74V4.25c0-1.2.92-2.17 2.1-2.24L6.25 2h11.5zM8.5 5a1.5 1.5 0 000 3h7a1.5 1.5 0 000-3h-7zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.14-2.35a.5.5 0 10-.71.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.64a.5.5 0 00-.7-.71l-1.65 1.64-1.64-1.64z" fill={primaryFill} /></svg>;
}

const DocumentHeaderDismiss24Filled = wrapIcon(rawSvg({}), 'DocumentHeaderDismiss24Filled');
export default DocumentHeaderDismiss24Filled;
      