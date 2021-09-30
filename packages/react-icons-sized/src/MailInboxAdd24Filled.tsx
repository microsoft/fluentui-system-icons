import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM17 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H16V3.5a.5.5 0 011 0V6h2.5a.5.5 0 110 1H17z" fill={primaryFill} /><path d="M19.5 14v-1.73a6.52 6.52 0 001.5-1.08v7.56c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 18.75V7.25C3 5.45 4.46 4 6.25 4h4.25c-.2.47-.34.98-.42 1.5H6.25c-.97 0-1.75.78-1.75 1.75V14H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5 0c0-.41.34-.75.75-.75h4.5z" fill={primaryFill} /></svg>;
}

const MailInboxAdd24Filled = wrapIcon(rawSvg({}), 'MailInboxAdd24Filled');
export default MailInboxAdd24Filled;
      