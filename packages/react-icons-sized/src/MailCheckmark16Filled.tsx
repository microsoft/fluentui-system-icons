import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L9.5 6.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7zM10.5 11c.9 0 1.75-.22 2.5-.6V13a2 2 0 01-2 2H3a2 2 0 01-2-2V8.34l5.76 3.1a.5.5 0 00.48 0l1.4-.76c.59.2 1.21.32 1.86.32zM3 5h2.02L5 5.5a5.5 5.5 0 002.54 4.64l-.54.3L1 7.2V7c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
}

const MailCheckmark16Filled = wrapIcon(rawSvg({}), 'MailCheckmark16Filled');
export default MailCheckmark16Filled;
      