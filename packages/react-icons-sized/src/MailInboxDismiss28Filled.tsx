import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-9.15-3.35a.5.5 0 00-.7.7l2.64 2.65-2.64 2.65a.5.5 0 00.7.7l2.65-2.64 2.65 2.64a.5.5 0 00.7-.7L20.21 7.5l2.64-2.65a.5.5 0 00-.7-.7L19.5 6.79l-2.65-2.64z" fill={primaryFill} /><path d="M25 22.75V12.6c-.44.48-.95.9-1.5 1.25V16h-6.1a.75.75 0 00-.65.75 2.75 2.75 0 11-5.5 0v-.1a.75.75 0 00-.75-.65h-6V7.25c0-.97.78-1.75 1.75-1.75h6.02c.14-.53.35-1.03.6-1.5H6.25A3.25 3.25 0 003 7.25v15.5C3 24.55 4.46 26 6.25 26h15.5c1.8 0 3.25-1.46 3.25-3.25z" fill={primaryFill} /></svg>;
}

const MailInboxDismiss28Filled = wrapIcon(rawSvg({}), 'MailInboxDismiss28Filled');
export default MailInboxDismiss28Filled;
      