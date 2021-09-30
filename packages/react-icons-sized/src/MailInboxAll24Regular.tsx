import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3h11.5a3.25 3.25 0 013.24 3.07l.01.18v11.5a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V6.25a3.25 3.25 0 013.07-3.24L6.25 3zm2.08 11.5H4.5v3.25c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V14.5h-3.82a3.75 3.75 0 01-3.48 3H12a3.75 3.75 0 01-3.63-2.81l-.04-.19zm9.42-10H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15V13H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5.15v-.15c0-.38.28-.7.65-.74L15 13h4.5V6.25c0-.92-.7-1.67-1.6-1.74l-.15-.01zm-11 5h10.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h10.6-10.5zm0-3h10.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h10.6-10.5z" fill={primaryFill} /></svg>;
}

const MailInboxAll24Regular = wrapIcon(rawSvg({}), 'MailInboxAll24Regular');
export default MailInboxAll24Regular;
      