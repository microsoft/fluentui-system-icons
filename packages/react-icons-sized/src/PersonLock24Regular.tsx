import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 14H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.71 0 1.39-.05 2.03-.14a2.52 2.52 0 01-.03-.36v-1.15c-.61.1-1.28.15-2 .15-2.74 0-4.7-.74-5.96-2.21-.34-.41-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h7.96A2.5 2.5 0 0114 14.05V14zM10 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM15 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H20v-1a2.5 2.5 0 00-5 0v1zm1.5-1a1 1 0 112 0v1h-2v-1zm2 5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const PersonLock24Regular = wrapIcon(rawSvg({}), 'PersonLock24Regular');
export default PersonLock24Regular;
      