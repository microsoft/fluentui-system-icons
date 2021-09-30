import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 4c-.2.47-.34.98-.42 1.5H6.25c-.97 0-1.75.78-1.75 1.75V14H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5 0c0-.41.34-.75.75-.75h4.5v-1.73a6.52 6.52 0 001.5-1.08v7.56c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 18.75V7.25C3 5.45 4.46 4 6.25 4h4.25zm6-3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.22 2.59l-.07.06-.06.07a.5.5 0 000 .56l.06.07L18.29 6h-5.38a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4L13 7h5.3l-1.65 1.65-.06.07a.5.5 0 00.7.7l.06-.07 2.54-2.54.04-.05.03-.07.02-.06.02-.08v-.1l-.02-.08-.03-.08-.04-.07-.04-.06-2.52-2.51-.07-.06a.5.5 0 00-.56 0z" fill={primaryFill} /></svg>;
}

const MailInboxArrowRight24Filled = wrapIcon(rawSvg({}), 'MailInboxArrowRight24Filled');
export default MailInboxArrowRight24Filled;
      