import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5A2.5 2.5 0 016.5 3h9A2.5 2.5 0 0118 5.5v7a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 014 12.5v-7zm6.75 4.43L5 6.96v5.54c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V6.96l-5.75 2.97-.08.04a.5.5 0 01-.42-.04zM15.5 4h-9C5.67 4 5 4.67 5 5.5v.3l6 3.12 6-3.12v-.3c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /><path d="M13.5 17c.82 0 1.54-.4 2-1h-9A3.5 3.5 0 013 12.5v-7c-.6.46-1 1.18-1 2v5A4.5 4.5 0 006.5 17h7z" fill={primaryFill} /></svg>;
}

const MailCopy20Regular = wrapIcon(rawSvg({}), 'MailCopy20Regular');
export default MailCopy20Regular;
      