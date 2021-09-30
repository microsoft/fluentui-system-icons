import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75V13H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5 0c0-.41.34-.75.75-.75h4.5V6.25c0-.92-.7-1.67-1.6-1.74l-.15-.01z" fill={primaryFill} /></svg>;
}

const MailInbox24Filled = wrapIcon(rawSvg({}), 'MailInbox24Filled');
export default MailInbox24Filled;
      