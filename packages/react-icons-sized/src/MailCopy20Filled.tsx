import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.5V6.37l6.75 3.56c.15.1.35.1.5 0L18 6.37v6.13a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 014 12.5z" fill={primaryFill} /><path d="M4.02 5.22A2.5 2.5 0 016.5 3h9a2.5 2.5 0 012.48 2.22L11 8.92l-6.98-3.7z" fill={primaryFill} /><path d="M13.5 17c.82 0 1.54-.4 2-1h-9A3.5 3.5 0 013 12.5v-7c-.6.46-1 1.18-1 2v5A4.5 4.5 0 006.5 17h7z" fill={primaryFill} /></svg>;
}

const MailCopy20Filled = wrapIcon(rawSvg({}), 'MailCopy20Filled');
export default MailCopy20Filled;
      