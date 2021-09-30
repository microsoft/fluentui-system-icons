import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.27 5H3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2v-1h-1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V8.88l3.08 1.65c-.1-.35-.1-.74.02-1.12L2 7.74V7a1 1 0 011-1h3.77l.5-1zM6.1 9.55l3.5-7a1 1 0 011.78 0l3.5 7A1 1 0 0114 11H7a1 1 0 01-.9-1.45zM10.5 4a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm.5 5.5a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const MailWarning16Regular = wrapIcon(rawSvg({}), 'MailWarning16Regular');
export default MailWarning16Regular;
      