import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.14-2.35a.5.5 0 10-.71.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.65a.5.5 0 10.7-.71L18.21 6.5l1.64-1.65a.5.5 0 00-.7-.7L17.5 5.79l-1.64-1.64zM17.5 13c.89 0 1.73-.17 2.5-.5v7.25c0 1.2-.93 2.17-2.1 2.24l-.15.01H6.25c-1.2 0-2.17-.93-2.24-2.1L4 19.75V4.25c0-1.2.92-2.17 2.1-2.25H12.82a6.5 6.5 0 004.69 11zm-9 3a1.5 1.5 0 000 3h7a1.5 1.5 0 000-3h-7z" fill={primaryFill} /></svg>;
}

const DocumentFooterDismiss24Filled = wrapIcon(rawSvg({}), 'DocumentFooterDismiss24Filled');
export default DocumentFooterDismiss24Filled;
      