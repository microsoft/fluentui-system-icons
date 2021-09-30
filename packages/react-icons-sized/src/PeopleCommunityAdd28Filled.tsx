import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.08 13.4a4.48 4.48 0 00.16-3.4h6.01c.97 0 1.75.78 1.75 1.75v2.11c-.07.43-.2.81-.39 1.15a7.47 7.47 0 00-7.53-1.61zM13.42 23c-2.8-.14-4.52-1.15-4.9-3.1l-.02-.15v-2c0-.97.78-1.75 1.75-1.75h4.25a7.47 7.47 0 00-1.08 7zM9.76 10H3.75C2.78 10 2 10.78 2 11.75v2l.01.15C2.43 16 4.37 17 7.57 17h.03c.32-1.15 1.39-2 2.65-2h.92l-.17-.15A4.49 4.49 0 019.76 10zm7.74 1.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm6.5-6a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-13 0a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zM20.5 27a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-11c.28 0 .5.22.5.5V20h3.5a.5.5 0 010 1H21v3.5a.5.5 0 01-1 0V21h-3.5a.5.5 0 010-1H20v-3.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const PeopleCommunityAdd28Filled = wrapIcon(rawSvg({}), 'PeopleCommunityAdd28Filled');
export default PeopleCommunityAdd28Filled;
      