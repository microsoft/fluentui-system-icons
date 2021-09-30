import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 4C20.99 4 22 5 22 6.25v6.56a6.52 6.52 0 00-1.5-1.08V6.25a.75.75 0 00-.75-.75H4.25a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75H7v-2.75c0-.92.7-1.67 1.6-1.74l.15-.01h3.27c-.3.46-.53.97-.7 1.5H8.74a.25.25 0 00-.24.2l-.01.05v2.75h2.58c.08.53.22 1.03.42 1.5H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5z" fill={primaryFill} /><path d="M12 7a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.94-3.08a.58.58 0 00-1.12 0l-.55 1.79h-1.8c-.57 0-.8.75-.35 1.1l1.46 1.1-.56 1.79c-.17.56.44 1.03.9.68l1.46-1.1 1.46 1.1c.46.35 1.07-.12.9-.68l-.56-1.79 1.46-1.1c.46-.35.22-1.1-.35-1.1h-1.8l-.55-1.79z" fill={primaryFill} /></svg>;
}

const VideoPersonStar24Regular = wrapIcon(rawSvg({}), 'VideoPersonStar24Regular');
export default VideoPersonStar24Regular;
      