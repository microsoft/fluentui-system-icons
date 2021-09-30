import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zm-6.48 4c.04.52.14 1.02.3 1.5H7a.75.75 0 01-.1-1.5H11.02zm.48-3c-.2.47-.34.98-.42 1.5H4a.75.75 0 01-.1-1.5h7.6zm2.54-3c-.64.4-1.2.91-1.66 1.5H7a.75.75 0 01-.1-1.5h7.14zM6 5c1.13 0 2.13.69 2.55 1.72a.75.75 0 01-1.35.65l-.04-.09A1.25 1.25 0 106 9h11.5a.75.75 0 01.1 1.5H6A2.75 2.75 0 016 5zm14 1a.75.75 0 01.1 1.5H11a.75.75 0 01-.1-1.5H20z" fill={primaryFill} /></svg>;
}

const ReadingListAdd24Regular = wrapIcon(rawSvg({}), 'ReadingListAdd24Regular');
export default ReadingListAdd24Regular;
      