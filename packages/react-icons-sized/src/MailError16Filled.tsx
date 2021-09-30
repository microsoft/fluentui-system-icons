import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 11c.9 0 1.75-.22 2.5-.6V13a2 2 0 01-2 2H3a2 2 0 01-2-2V8.34l5.76 3.1a.5.5 0 00.48 0l1.4-.76c.59.2 1.21.32 1.86.32zM3 5h2.02L5 5.5a5.5 5.5 0 002.54 4.64l-.54.3L1 7.2V7c0-1.1.9-2 2-2zm7.5 5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM10 3.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm1.13 4a.62.62 0 11-1.25 0 .62.62 0 011.24 0z" fill={primaryFill} /></svg>;
}

const MailError16Filled = wrapIcon(rawSvg({}), 'MailError16Filled');
export default MailError16Filled;
      