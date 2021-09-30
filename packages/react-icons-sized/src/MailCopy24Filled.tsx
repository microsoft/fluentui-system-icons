import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7.51c-.9.58-1.5 1.59-1.5 2.74v6c0 2.9 2.35 5.25 5.25 5.25h9c1.15 0 2.16-.6 2.74-1.5H6.75A3.75 3.75 0 013 16.25V7.51zm1 .6v7.64a3.25 3.25 0 003.07 3.24l.18.01h11.5a3.25 3.25 0 003.24-3.07l.01-.18V8.11l-8.65 4.55a.75.75 0 01-.7 0L4 8.11zM18.75 4H7.25A3.25 3.25 0 004.1 6.47l8.9 4.68 8.9-4.68A3.25 3.25 0 0018.94 4L18.75 4z" fill={primaryFill} /></svg>;
}

const MailCopy24Filled = wrapIcon(rawSvg({}), 'MailCopy24Filled');
export default MailCopy24Filled;
      