import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 1a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L4 12.2c.46.28.97.49 1.5.62-.16-.37-.3-.76-.38-1.18a4.97 4.97 0 01-.8-.4.5.5 0 00-.42-.06l-1.66.56.51-1.79a.5.5 0 00-.05-.39 5 5 0 118.93-4.43c.42.08.81.22 1.18.39A6 6 0 007 1zm8 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.6 7.9a.5.5 0 00-.7 0L7.15 9.65a.5.5 0 000 .7L8.9 12.1a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75H8.71l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ChatArrowBack16Regular = wrapIcon(rawSvg({}), 'ChatArrowBack16Regular');
export default ChatArrowBack16Regular;
      