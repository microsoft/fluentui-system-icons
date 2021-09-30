import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 9.74a5.48 5.48 0 01-4.5 1.17c-.33.38-.8.59-1.5.59-.9 0-1.43-.36-1.74-.97A2.55 2.55 0 016 9.5a.5.5 0 00-.5-.5H3V5.5C3 4.67 3.67 4 4.5 4h.7c.1-.35.24-.68.4-1H4.5A2.5 2.5 0 002 5.5v7A2.5 2.5 0 004.5 15h7a2.5 2.5 0 002.5-2.5V9.74zm-3.5.26a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM8.15 5.85a.5.5 0 11.7-.7L10 6.29V3.5a.5.5 0 011 0v2.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.35.15.5.5 0 01-.35-.14l-2-2z" fill={primaryFill} /></svg>;
}

const MailInboxArrowDown16Filled = wrapIcon(rawSvg({}), 'MailInboxArrowDown16Filled');
export default MailInboxArrowDown16Filled;
      