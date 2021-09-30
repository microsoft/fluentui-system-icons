import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.76 6.43a2 2 0 112.82 2.82 2 2 0 01-2.82-2.82zm2.11.7a1 1 0 10-1.4 1.41 1 1 0 001.4-1.4z" fill={primaryFill} /><path d="M9.44 13.6l.6.6a1.5 1.5 0 001.71.3l1.12 1.12c.2.2.51.2.7 0L15 14.2c.86-.86.96-2.17.31-3.14l.85-.85a6.3 6.3 0 001.56-6.33 2.43 2.43 0 00-1.6-1.6A6.3 6.3 0 009.8 3.86l-.85.85A2.5 2.5 0 005.8 5L4.38 6.43a.5.5 0 000 .7L5.5 8.27a1.5 1.5 0 00.3 1.7l.61.61-1.22.73a.5.5 0 00-.1.78l2.83 2.83a.5.5 0 00.79-.1l.73-1.21zm7.32-9.42a5.3 5.3 0 01-1.3 5.33l-4 4a.5.5 0 01-.7 0l-1.07-1.07-2.12-2.12L6.5 9.24a.5.5 0 010-.7l4-4a5.3 5.3 0 015.32-1.3c.44.13.8.48.93.93z" fill={primaryFill} /><path d="M5.8 14.9a.5.5 0 10-.7-.7l-1.77 1.77a.5.5 0 10.7.7l1.78-1.76z" fill={primaryFill} /><path d="M4.39 12.79c.2.2.2.5 0 .7l-.7.71a.5.5 0 11-.72-.7l.71-.71c.2-.2.51-.2.71 0z" fill={primaryFill} /><path d="M7.22 16.32a.5.5 0 10-.7-.7l-.72.7a.5.5 0 00.71.71l.71-.7z" fill={primaryFill} /></svg>;
}

const RocketFilled = wrapIcon(rawSvg({}), 'RocketFilled');
export default RocketFilled;
      