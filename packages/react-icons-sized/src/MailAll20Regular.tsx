import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 5.5A2.5 2.5 0 0013.5 3h-9A2.5 2.5 0 002 5.5v7A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5v-7zM9.25 9.93L15 6.96v5.54c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 013 12.5V6.96l5.75 2.97.08.04c.14.05.3.04.42-.04zM4.5 4h9c.83 0 1.5.67 1.5 1.5v.3L9 8.92 3 5.8v-.3C3 4.67 3.67 4 4.5 4z" fill={primaryFill} /><path d="M6.5 17a2.5 2.5 0 01-2-1h9a3.5 3.5 0 003.5-3.5v-7c.6.46 1 1.18 1 2v5a4.5 4.5 0 01-4.5 4.5h-7z" fill={primaryFill} /></svg>;
}

const MailAll20Regular = wrapIcon(rawSvg({}), 'MailAll20Regular');
export default MailAll20Regular;
      