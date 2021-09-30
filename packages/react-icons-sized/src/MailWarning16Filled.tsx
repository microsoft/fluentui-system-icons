import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.08 10.53A2 2 0 007 12H13v1a2 2 0 01-2 2H3a2 2 0 01-2-2V8.34l4.08 2.2zM7.27 5L5.22 9.1c-.05.1-.1.2-.12.3L1 7.2V7c0-1.1.9-2 2-2h4.27zM6.1 9.55l3.5-7a1 1 0 011.78 0l3.5 7A1 1 0 0114 11H7a1 1 0 01-.9-1.45zM10.5 4a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm.5 5.5a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const MailWarning16Filled = wrapIcon(rawSvg({}), 'MailWarning16Filled');
export default MailWarning16Filled;
      