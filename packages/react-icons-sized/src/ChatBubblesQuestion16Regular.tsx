import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 8.88a.62.62 0 110 1.25.62.62 0 010-1.25zM7 4c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 01-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55C7.85 5.4 7.47 5 7 5c-.5 0-.86.37-.85.95a.5.5 0 01-1 0C5.14 4.83 5.95 4 7 4zM2 7a5 5 0 112.89 4.53l-2.3.46a.5.5 0 01-.58-.59l.46-2.29A4.98 4.98 0 012 7zm5-4a4 4 0 00-3.56 5.82c.05.1.06.21.04.32l-.34 1.72 1.72-.34a.5.5 0 01.32.04A4 4 0 107 3zm-1.14 9.9a4.98 4.98 0 005.25.63l2.3.46a.5.5 0 00.58-.59l-.46-2.29a4.98 4.98 0 00-.64-5.25 6.03 6.03 0 010 2.24 4.01 4.01 0 01-.33 2.72.5.5 0 00-.04.32l.34 1.72-1.72-.34a.5.5 0 00-.32.04 3.98 3.98 0 01-2.72.34 6.03 6.03 0 01-2.24 0z" fill={primaryFill} /></svg>;
}

const ChatBubblesQuestion16Regular = wrapIcon(rawSvg({}), 'ChatBubblesQuestion16Regular');
export default ChatBubblesQuestion16Regular;
      