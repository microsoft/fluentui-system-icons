import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8L7.7 7.6A3.48 3.48 0 017 5.5zM10.5 9c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 0110.5 9zm0 2c.9 0 1.75-.22 2.5-.6V13a2 2 0 01-2 2H3a2 2 0 01-2-2V8.34l5.76 3.1a.5.5 0 00.48 0l1.4-.76c.59.2 1.21.32 1.86.32zM3 5h2.02L5 5.5a5.5 5.5 0 002.54 4.64l-.54.3L1 7.2V7c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
}

const MailProhibited16Filled = wrapIcon(rawSvg({}), 'MailProhibited16Filled');
export default MailProhibited16Filled;
      