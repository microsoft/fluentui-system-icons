import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM13 8V4.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V8h2.5c.28 0 .5.22.5.5a2.55 2.55 0 00.26 1.03c.3.61.84.97 1.74.97s1.43-.36 1.74-.97A2.55 2.55 0 0010 8.5a.5.5 0 01.41-.5H13z" fill={primaryFill} /></svg>;
}

const MailInbox16Filled = wrapIcon(rawSvg({}), 'MailInbox16Filled');
export default MailInbox16Filled;
      