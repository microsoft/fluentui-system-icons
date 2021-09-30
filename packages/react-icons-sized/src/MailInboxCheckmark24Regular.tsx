import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0L15.5 7.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7zm-.35 8.12V14h-4.6a.75.75 0 00-.65.75v.15a2.25 2.25 0 01-4.5-.15v-.1A.75.75 0 009 14H4.5V7.11c.08-.9.83-1.61 1.75-1.61h3.83c.08-.52.22-1.03.42-1.5H6.07A3.25 3.25 0 003 7.26v11.68A3.25 3.25 0 006.26 22h11.68A3.25 3.25 0 0021 18.74v-7.56c-.44.43-.95.8-1.5 1.08zm-15 6.48V15.5h3.83l.04.19A3.75 3.75 0 0012 18.5h.2a3.75 3.75 0 003.48-3h3.82v3.39c-.08.9-.83 1.61-1.75 1.61H6.11c-.9-.08-1.61-.83-1.61-1.75z" fill={primaryFill} /></svg>;
}

const MailInboxCheckmark24Regular = wrapIcon(rawSvg({}), 'MailInboxCheckmark24Regular');
export default MailInboxCheckmark24Regular;
      