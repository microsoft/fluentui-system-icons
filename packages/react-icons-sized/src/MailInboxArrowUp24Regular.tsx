import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 4c-.2.47-.34.98-.42 1.5H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15V14H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5 0c0-.38.28-.7.65-.74L15 14h4.5v-1.73a6.52 6.52 0 001.5-1.08v7.56a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 18.75V7.25a3.25 3.25 0 013.07-3.24L6.25 4h4.25zM8.33 15.5H4.5v3.25c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V15.5h-3.82a3.75 3.75 0 01-3.48 3H12a3.75 3.75 0 01-3.63-2.81l-.04-.19zM16.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.13 2.02L16.54 3h-.11l-.06.02-.08.03-.07.04-.06.04-2.51 2.52-.06.07a.5.5 0 000 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06L16 4.71v5.38c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41L17 10V4.7l1.65 1.65.07.06a.5.5 0 00.7-.7l-.07-.06-2.54-2.55-.05-.03-.07-.03-.06-.02z" fill={primaryFill} /></svg>;
}

const MailInboxArrowUp24Regular = wrapIcon(rawSvg({}), 'MailInboxArrowUp24Regular');
export default MailInboxArrowUp24Regular;
      