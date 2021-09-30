import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8L7.7 7.6A3.48 3.48 0 017 5.5zM10.5 9c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 0110.5 9zm1.5 4v-2.2c.35-.1.68-.24 1-.4V13a2 2 0 01-2 2H3a2 2 0 01-2-2V7c0-1.1.9-2 2-2h2.02a5.57 5.57 0 000 1H3a1 1 0 00-1 1v.74l5 2.7.54-.3c.35.22.72.4 1.1.54l-1.4.76a.5.5 0 01-.48 0L2 8.88V13a1 1 0 001 1h8a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const MailProhibited16Regular = wrapIcon(rawSvg({}), 'MailProhibited16Regular');
export default MailProhibited16Regular;
      