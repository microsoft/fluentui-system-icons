import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 16C7.2 16 8 16.8 8 17.75v2.5C8 21.22 7.2 22 6.25 22h-2.5C2.78 22 2 21.22 2 20.25v-2.5C2 16.8 2.78 16 3.75 16h2.5zm0 1.5h-2.5a.25.25 0 00-.25.25v2.5c0 .14.11.25.25.25h2.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 00-.25-.25zm3.5.5h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h11.6-11.5zm-3.5-9C7.2 9 8 9.78 8 10.75v2.5C8 14.22 7.2 15 6.25 15h-2.5C2.78 15 2 14.22 2 13.25v-2.5C2 9.78 2.78 9 3.75 9h2.5zm0 1.5h-2.5a.25.25 0 00-.25.25v2.5c0 .14.11.25.25.25h2.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 00-.25-.25zm3.5.5h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h11.6-11.5zm-3.5-9C7.2 2 8 2.78 8 3.75v2.5C8 7.2 7.2 8 6.25 8h-2.5C2.78 8 2 7.2 2 6.25v-2.5C2 2.78 2.78 2 3.75 2h2.5zm0 1.5h-2.5a.25.25 0 00-.25.25v2.5c0 .14.11.25.25.25h2.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 00-.25-.25zm3.5.5h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h11.6-11.5z" fill={primaryFill} /></svg>;
}

const AppsList24Regular = wrapIcon(rawSvg({}), 'AppsList24Regular');
export default AppsList24Regular;
      