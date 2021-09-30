import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.31 10.25a.75.75 0 10-1.12-1l-2 2.25a.75.75 0 000 1l2 2.25a.75.75 0 101.12-1l-.89-1h9.16l-.9 1a.75.75 0 101.13 1l2-2.25.01-.01a.75.75 0 00-.01-1l-2-2.24a.75.75 0 10-1.12 1l.89 1H7.42l.89-1z" fill={primaryFill} /><path d="M12.75 4h7.5C21.22 4 22 4.8 22 5.75v12.5c0 .96-.78 1.75-1.75 1.75H3.75c-.96 0-1.74-.79-1.74-1.75V5.75C2 4.78 2.79 4 3.76 4h9zm7.5 1.5h-7.5v5h-1.5v-5h-7.5a.25.25 0 00-.24.25v12.5c0 .13.1.25.25.25h7.5v-5h1.5v5h7.5c.13 0 .24-.11.24-.25V5.75a.25.25 0 00-.25-.25z" fill={primaryFill} /></svg>;
}

const DualScreenSpan24Regular = wrapIcon(rawSvg({}), 'DualScreenSpan24Regular');
export default DualScreenSpan24Regular;
      