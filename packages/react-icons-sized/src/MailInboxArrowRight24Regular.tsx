import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 4c-.2.47-.34.98-.42 1.5H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15V14H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5.15v-.15c0-.38.28-.7.65-.74L15 14h4.5v-1.73a6.52 6.52 0 001.5-1.08v7.56a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 18.75V7.25a3.25 3.25 0 013.07-3.24L6.25 4h4.25zm9 11.5h-3.82a3.75 3.75 0 01-3.48 3H12a3.75 3.75 0 01-3.67-3H4.5v3.25c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V15.5zM16.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.22 2.59l-.07.06-.06.07a.5.5 0 000 .56l.06.07L18.29 6h-5.38a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4L13 7h5.3l-1.65 1.65-.06.07a.5.5 0 00.7.7l.06-.07 2.54-2.54.04-.05.03-.07.02-.06.02-.08v-.1l-.02-.08-.03-.08-.04-.07-.04-.06-2.52-2.51-.07-.06a.5.5 0 00-.56 0z" fill={primaryFill} /></svg>;
}

const MailInboxArrowRight24Regular = wrapIcon(rawSvg({}), 'MailInboxArrowRight24Regular');
export default MailInboxArrowRight24Regular;
      