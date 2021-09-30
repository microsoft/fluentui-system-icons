import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 15a2.5 2.5 0 012.5 2.34v2.16a2.5 2.5 0 01-5 .17V17.5a2.5 2.5 0 012.5-2.5zM12 5a8.5 8.5 0 018.48 9.14 3.44 3.44 0 00-1.5-.1l.02-.54a7 7 0 10-5.5 6.84v.9l.01.2v.42A8.5 8.5 0 1112 5zm4 10.65v5.6a.75.75 0 01-1.5.1v-4.56l-.51.18a.75.75 0 01-.91-.38l-.04-.1a.75.75 0 01.38-.9l.1-.05 1.5-.5c.45-.15.92.15.98.61zm3.5.85a1 1 0 00-1 .88v2.12a1 1 0 002 .12V17.5a1 1 0 00-1-1zM12 8c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm7.16-2.88l.08.06 1.13.99a.75.75 0 01-.9 1.2l-.08-.07-1.13-.99a.75.75 0 01.9-1.19zM14.25 2.5a.75.75 0 01.1 1.49h-4.6a.75.75 0 01-.1-1.49h4.6z" fill={primaryFill} /></svg>;
}

const Timer1024Regular = wrapIcon(rawSvg({}), 'Timer1024Regular');
export default Timer1024Regular;
      