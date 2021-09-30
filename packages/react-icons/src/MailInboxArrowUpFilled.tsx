import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35A.5.5 0 0013.5 3a.5.5 0 00-.35.15l-2 2a.5.5 0 00.7.7L13 4.71V7.5a.5.5 0 101 0V4.7l1.15 1.15a.5.5 0 10.7-.7l-2-2z" fill={primaryFill} /><path d="M16 10.4v.6h-3.5a.5.5 0 00-.5.5v.01a1.75 1.75 0 01-.03.3c-.04.2-.1.46-.23.72-.13.25-.3.49-.57.66-.26.18-.63.31-1.17.31-.54 0-.9-.13-1.17-.3a1.7 1.7 0 01-.57-.67A2.57 2.57 0 018 11.5v-.01a.5.5 0 00-.5-.5H4V7c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V9.74c-.3.26-.64.48-1 .66z" fill={primaryFill} /></svg>;
}

const MailInboxArrowUpFilled = wrapIcon(rawSvg({}), 'MailInboxArrowUpFilled');
export default MailInboxArrowUpFilled;
      