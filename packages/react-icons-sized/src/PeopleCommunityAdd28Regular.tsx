import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 16c-.35.46-.64.96-.88 1.5h-2.87a.75.75 0 00-.75.75v1.42c.24 1.03 1.2 1.64 3.06 1.8.07.53.2 1.04.36 1.52-2.8-.13-4.52-1.14-4.9-3.1l-.02-.14v-1.5c0-1.24 1-2.25 2.25-2.25h3.75zm11.11-.99a7.53 7.53 0 00-1.22-.93c.05-.12.09-.25.11-.39v-1.44a.75.75 0 00-.75-.75H18.5a4.5 4.5 0 00-.26-1.5h5.51c1.24 0 2.25 1 2.25 2.25v1.61c-.07.43-.2.81-.39 1.15zM9.76 10H4.25C3.01 10 2 11 2 12.25v1.5l.01.15C2.43 16 4.37 17 7.57 17h.18c.28-.68.8-1.25 1.45-1.6-.47.07-1.01.1-1.63.1-2.52 0-3.79-.63-4.07-1.83v-1.42c0-.41.34-.75.75-.75H9.5v-.26c.03-.43.12-.85.26-1.24zm7.74 1.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5.5 0a2 2 0 114 0 2 2 0 01-4 0zm12-6a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5.5 0a2 2 0 114 0 2 2 0 01-4 0zm-7.5 0a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5.5 0a2 2 0 114 0 2 2 0 01-4 0zm15 21.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-11c.28 0 .5.22.5.5V20h3.5a.5.5 0 010 1H21v3.5a.5.5 0 01-1 0V21h-3.5a.5.5 0 010-1H20v-3.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const PeopleCommunityAdd28Regular = wrapIcon(rawSvg({}), 'PeopleCommunityAdd28Regular');
export default PeopleCommunityAdd28Regular;
      