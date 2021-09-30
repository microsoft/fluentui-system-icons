import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 11c.97 0 1.75.79 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75h-4.5c-.97 0-1.75-.78-1.75-1.75v-6.5c0-.96.78-1.75 1.75-1.75h4.5zm-9.98 4.01c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.74-1.75 1.74H4.75C3.8 21 3 20.22 3 19.25v-2.49c0-.96.79-1.75 1.75-1.75h4.52zm9.98-2.5h-4.5a.25.25 0 00-.25.24v6.5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 00-.25-.25zm-9.98 4H4.75a.25.25 0 00-.25.25v2.5c0 .13.12.24.25.24h4.52c.14 0 .25-.11.25-.25v-2.49a.25.25 0 00-.25-.25zM9.25 3c.97 0 1.75.78 1.75 1.75v6.5c0 .92-.7 1.67-1.6 1.74l-.15.01h-4.5C3.8 13 3 12.22 3 11.25v-6.5C3 3.78 3.8 3 4.75 3h4.5zm0 1.5h-4.5a.25.25 0 00-.25.25v6.5c0 .14.12.25.25.25h4.56c.11-.03.2-.13.2-.25v-6.5a.25.25 0 00-.26-.25zm10-1.5c.97 0 1.75.78 1.75 1.75v2.5C21 8.22 20.22 9 19.25 9h-4.5C13.78 9 13 8.22 13 7.25v-2.5c0-.97.78-1.75 1.75-1.75h4.5zm-4.5 1.5a.25.25 0 00-.25.25v2.5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 00-.25-.25h-4.5z" fill={primaryFill} /></svg>;
}

const Glance24Regular = wrapIcon(rawSvg({}), 'Glance24Regular');
export default Glance24Regular;
      