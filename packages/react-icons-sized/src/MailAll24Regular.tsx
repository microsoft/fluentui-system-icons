import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 7.51c.9.58 1.5 1.59 1.5 2.74v6c0 2.9-2.35 5.25-5.25 5.25h-9c-1.15 0-2.16-.6-2.74-1.5h11.74A3.75 3.75 0 0021 16.25V7.51zM5.25 4h11.5a3.25 3.25 0 013.24 3.07l.01.18v8.5a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 15.75v-8.5a3.25 3.25 0 013.07-3.24L5.25 4zM18.5 8.9l-7.15 3.76c-.19.1-.4.12-.6.05l-.1-.05L3.5 8.9v6.85c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V8.9zm-1.75-3.4H5.25c-.92 0-1.67.7-1.74 1.6v.1L11 11.16l7.5-3.95c-.02-.94-.8-1.7-1.75-1.7z" fill={primaryFill} /></svg>;
}

const MailAll24Regular = wrapIcon(rawSvg({}), 'MailAll24Regular');
export default MailAll24Regular;
      