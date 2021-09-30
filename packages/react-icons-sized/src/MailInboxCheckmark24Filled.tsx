import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0L15.5 7.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7zm-.35 8.12V14H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0v-.1A.75.75 0 009 14H4.5V7.25c0-.97.78-1.75 1.75-1.75h3.83c.08-.52.22-1.03.42-1.5H6.25A3.25 3.25 0 003 7.25v11.5C3 20.55 4.46 22 6.25 22h11.5c1.8 0 3.25-1.46 3.25-3.25v-7.56c-.44.43-.95.8-1.5 1.08z" fill={primaryFill} /></svg>;
}

const MailInboxCheckmark24Filled = wrapIcon(rawSvg({}), 'MailInboxCheckmark24Filled');
export default MailInboxCheckmark24Filled;
      