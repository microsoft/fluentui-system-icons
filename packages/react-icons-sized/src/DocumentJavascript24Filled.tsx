import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v10.02a1.76 1.76 0 011.8.91c.54-.57 1.3-.93 2.15-.93h.1A2.95 2.95 0 0111 16.95V17c0 .45-.17.86-.45 1.17.29.44.45.96.45 1.5v.38c0 .75-.28 1.43-.74 1.95H18a2 2 0 002-2V10h-6a2 2 0 01-2-2zm1.5 0V2.5l6 6H14a.5.5 0 01-.5-.5zm-9.25 7c.41 0 .75.34.75.75V20a2 2 0 11-4 0v-.25a.75.75 0 011.5 0V20a.5.5 0 001 0v-4.25c0-.41.34-.75.75-.75zm3.7 0C6.87 15 6 15.87 6 16.95v.23c0 .62.32 1.19.85 1.5l1.53.92c.07.05.12.13.12.22v.23c0 .25-.2.45-.45.45h-.1a.45.45 0 01-.45-.45V20A.75.75 0 006 20v.05C6 21.13 6.87 22 7.95 22h.1c1.08 0 1.95-.87 1.95-1.95v-.23c0-.62-.32-1.19-.85-1.5l-1.53-.92a.25.25 0 01-.12-.22v-.23c0-.25.2-.45.45-.45h.1c.25 0 .45.2.45.45V17a.75.75 0 001.5 0v-.05C10 15.87 9.13 15 8.05 15h-.1z" fill={primaryFill} /></svg>;
}

const DocumentJavascript24Filled = wrapIcon(rawSvg({}), 'DocumentJavascript24Filled');
export default DocumentJavascript24Filled;
      