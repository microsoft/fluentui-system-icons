import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 12.5a2 2 0 012 1.85V15h-1.5v-.5a.5.5 0 00-.41-.5H4l-.1.01a.5.5 0 00-.25.14.5.5 0 00-.14.25l-.01.1v2c0 1 .45 1.72 1.42 2.24.82.45 2 .72 3.26.76h.64a9 9 0 002.18-.33v1.55c-.84.2-1.7.28-2.5.28-2.72 0-6.34-.96-6.5-4.27V14.5a2 2 0 011.85-2H13zm8.5 2.5c.17 0 .34.02.5.05V14.35a2 2 0 00-2-1.85h-4.78l.13.16c.3.38.52.84.6 1.34h4.14a.5.5 0 01.41.5v.5h1zM8.5 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6zm9 .5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1.5a2 2 0 100 4 2 2 0 000-4zm-5.5 12c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5v-4zm10 .5a1 1 0 01-1-1h-1c0 1.1.9 2 2 2v-1zm0 2a2 2 0 00-2 2h1a1 1 0 011-1v-1zm-8-3a1 1 0 01-1 1v1a2 2 0 002-2h-1zm1 5a2 2 0 00-2-2v1a1 1 0 011 1h1zm4.25-2.5a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill={primaryFill} /></svg>;
}

const PeopleMoney24Regular = wrapIcon(rawSvg({}), 'PeopleMoney24Regular');
export default PeopleMoney24Regular;
      