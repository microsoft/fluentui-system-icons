import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12c.3 0 .58.02.86.07l.17.72a2 2 0 002.42 1.47l.1-.02.6-.18c.36.46.65 1 .85 1.57l-.45.43a2 2 0 00-.17 2.7l.15.15.47.46c-.2.57-.5 1.1-.85 1.57l-.6-.18a2 2 0 00-2.49 1.35l-.03.1-.17.72a5.18 5.18 0 01-1.72 0l-.17-.72a2 2 0 00-2.42-1.47l-.1.02-.6.18c-.36-.47-.65-1-.85-1.57l.45-.43a2 2 0 00.17-2.7l-.15-.15-.47-.46c.2-.58.5-1.1.85-1.57l.6.18a2 2 0 002.49-1.35l.03-.1.17-.72c.28-.05.57-.07.86-.07zM13.75 2C14.99 2 16 3 16 4.25v6.92c-.53.13-1.03.32-1.5.56V4.25a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h5.48c.29.55.65 1.06 1.08 1.5H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zm-5 15.5H11c0 .52.06 1.02.17 1.5H8.75a.75.75 0 010-1.5zM17.5 16c-.8 0-1.45.67-1.45 1.5S16.7 19 17.5 19c.8 0 1.45-.67 1.45-1.5S18.3 16 17.5 16z" fill={primaryFill} /></svg>;
}

const PhoneLinkSetup24Regular = wrapIcon(rawSvg({}), 'PhoneLinkSetup24Regular');
export default PhoneLinkSetup24Regular;
      