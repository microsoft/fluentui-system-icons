import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.99 4a2.25 2.25 0 00-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H4.25C3.01 4 2 5 2 6.25v13.5C2 20.99 3 22 4.25 22h8.56a6.52 6.52 0 01-1.08-1.5H4.25a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v4.83a6.55 6.55 0 011.5-.06V6.25C18 5.01 17 4 15.75 4h-1.76zm0 .1l.01.15V4.1zm-5.74-.6h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zm3.7 10.6a6.54 6.54 0 012.15-2.14l.93-.93a.75.75 0 10-1.06-1.06L9 14.94l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l2.43-2.43zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const ClipboardTaskAdd24Regular = wrapIcon(rawSvg({}), 'ClipboardTaskAdd24Regular');
export default ClipboardTaskAdd24Regular;
      