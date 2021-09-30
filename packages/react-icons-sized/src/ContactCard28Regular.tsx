import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 11.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm.75 3.25a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm-4.5-3.25a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM7 14.5h5a1 1 0 011 1v.5s-.5 2.5-3.5 2.5S6 16 6 16v-.5a1 1 0 011-1zM2 6.75A2.75 2.75 0 014.75 4h18.5A2.75 2.75 0 0126 6.75v14.5A2.75 2.75 0 0123.25 24H4.75A2.75 2.75 0 012 21.25V6.75zM4.75 5.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h18.5c.7 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75z" fill={primaryFill} /></svg>;
}

const ContactCard28Regular = wrapIcon(rawSvg({}), 'ContactCard28Regular');
export default ContactCard28Regular;
      