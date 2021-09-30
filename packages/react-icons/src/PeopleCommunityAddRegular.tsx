import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2.75 2.75 0 110 5.5A2.75 2.75 0 016 1zm0 1a1.75 1.75 0 100 3.5A1.75 1.75 0 006 2zm.68 5.5H2.5C1.67 7.5 1 8.17 1 9v.5c0 1.59 1.2 3.21 3.31 3.78.2-.34.46-.63.79-.85-2-.32-3.1-1.67-3.1-2.93V9c0-.28.22-.5.5-.5h3.83c.07-.35.19-.69.35-1zm3.32-1a2.74 2.74 0 00-.39 5.47c.19-.35.41-.69.67-1A1.76 1.76 0 018.42 8.5a1.75 1.75 0 013.25 1.28c.34-.2.7-.37 1.08-.5v-.03A2.75 2.75 0 0010 6.5zm8.68 4.42c-.24-.27-.5-.52-.78-.75.07-.22.1-.45.1-.67V9a.5.5 0 00-.5-.5h-3.82c-.08-.35-.2-.69-.36-1h4.18c.83 0 1.5.67 1.5 1.5v.5c0 .48-.11.96-.32 1.42zM9.2 13H6.5A1.5 1.5 0 005 14.5v.5c0 1.97 1.86 4 5 4 .42 0 .82-.04 1.2-.1a5.54 5.54 0 01-.95-.9H10c-2.57 0-4-1.56-4-3v-.5c0-.28.22-.5.5-.5h2.52c.03-.34.1-.68.19-1zm7.54-9.25a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0zm-4.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const PeopleCommunityAddRegular = wrapIcon(rawSvg({}), 'PeopleCommunityAddRegular');
export default PeopleCommunityAddRegular;
      