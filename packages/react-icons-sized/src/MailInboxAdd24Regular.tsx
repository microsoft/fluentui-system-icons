import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM17 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H16V3.5a.5.5 0 011 0V6h2.5a.5.5 0 110 1H17z" fill={primaryFill} /><path d="M19.5 14v-1.73a6.52 6.52 0 001.5-1.08v7.56a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 18.75V7.25a3.25 3.25 0 013.07-3.24L6.25 4h4.25c-.2.47-.34.98-.42 1.5H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15V14H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5.15v-.15c0-.38.28-.7.65-.74L15 14h4.5zm-15 1.5v3.25c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V15.5h-3.82a3.75 3.75 0 01-3.48 3H12a3.75 3.75 0 01-3.63-2.81l-.04-.19H4.5z" fill={primaryFill} /></svg>;
}

const MailInboxAdd24Regular = wrapIcon(rawSvg({}), 'MailInboxAdd24Regular');
export default MailInboxAdd24Regular;
      