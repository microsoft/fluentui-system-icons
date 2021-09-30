import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.41 8.41L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h6.81a6.52 6.52 0 01-1.08-1.5H6a.5.5 0 01-.5-.5V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v1.08c.52.08 1.03.22 1.5.42V9.83a2 2 0 00-.59-1.42zM13.5 4.62l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zM10.75 17.5H11c0 .52.06 1.02.17 1.5h-.42a.75.75 0 010-1.5zm.42-1.5c.13-.53.32-1.03.56-1.5h-.98a.75.75 0 000 1.5h.42zm1.64-3A6.51 6.51 0 0115 11.5h-4.25a.75.75 0 000 1.5h2.06zm-5.06-1.5a.75.75 0 100 1.5.75.75 0 000-1.5zM7 15.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm16-.75a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.78.42a.5.5 0 01-.22-.5V13.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1h-2.94a.5.5 0 01-.34-.08z" fill={primaryFill} /></svg>;
}

const DocumentBulletListClock24Regular = wrapIcon(rawSvg({}), 'DocumentBulletListClock24Regular');
export default DocumentBulletListClock24Regular;
      