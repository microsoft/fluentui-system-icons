import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5a2.74 2.74 0 00-.39 5.47 5.52 5.52 0 013.14-2.69v-.03A2.74 2.74 0 0010 6.5zm8.68 4.42a5.49 5.49 0 00-4.94-1.87 3.73 3.73 0 00-.42-1.55h4.18c.83 0 1.5.67 1.5 1.5v.5c0 .48-.11.96-.32 1.42zM9.2 13a5.5 5.5 0 001.98 5.9c-.37.06-.77.1-1.19.1-3.14 0-5-2.03-5-4v-.5A1.5 1.5 0 016.5 13h2.7zm-4.9.28C2.21 12.71 1 11.08 1 9.5V9c0-.83.67-1.5 1.5-1.5h4.18a3.73 3.73 0 00.77 4.5H6.5a2.5 2.5 0 00-2.19 1.28zM6 1a2.75 2.75 0 110 5.5A2.75 2.75 0 016 1zm8 0a2.75 2.75 0 110 5.5A2.75 2.75 0 0114 1zm.5 18a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const PeopleCommunityAdd20Filled = wrapIcon(rawSvg({}), 'PeopleCommunityAdd20Filled');
export default PeopleCommunityAdd20Filled;
      