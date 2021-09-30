import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5H8.5a.5.5 0 000 1H10v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H11V3.5zm1 9.5v-2.2c.35-.1.68-.24 1-.4V13a2 2 0 01-2 2H3a2 2 0 01-2-2V7c0-1.1.9-2 2-2h2.02a5.57 5.57 0 000 1H3a1 1 0 00-1 1v.74l5 2.7.54-.3c.35.22.72.4 1.1.54l-1.4.76a.5.5 0 01-.48 0L2 8.88V13a1 1 0 001 1h8a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const MailAdd16Regular = wrapIcon(rawSvg({}), 'MailAdd16Regular');
export default MailAdd16Regular;
      