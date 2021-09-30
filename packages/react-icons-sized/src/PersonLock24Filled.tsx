import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 14.05V14H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.71 0 1.39-.05 2.03-.14a2.51 2.51 0 01-.03-.36v-5a2.5 2.5 0 012-2.45zM10 2a5 5 0 110 10 5 5 0 010-10zm5 13v-1a2.5 2.5 0 015 0v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h.5zm1.5-1v1h2v-1a1 1 0 10-2 0zm2 5a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const PersonLock24Filled = wrapIcon(rawSvg({}), 'PersonLock24Filled');
export default PersonLock24Filled;
      