import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.9 5.9l-.06.07a.5.5 0 00.06.63L7.3 8 5.9 9.4l-.06.07a.5.5 0 00.06.63l.07.06c.2.14.46.12.63-.06L8 8.7l1.4 1.4.07.06c.2.14.46.12.63-.06l.06-.07a.5.5 0 00-.06-.63L8.7 8l1.4-1.4.06-.07a.5.5 0 00-.06-.63l-.07-.06a.5.5 0 00-.63.06L8 7.3 6.6 5.9l-.07-.06a.5.5 0 00-.63.06zM8 2a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L5 13.2A6 6 0 108 2zM3 8a5 5 0 112.33 4.23.5.5 0 00-.43-.06l-1.66.56.51-1.79a.5.5 0 00-.05-.39A4.97 4.97 0 013 8z" fill={primaryFill} /></svg>;
}

const ChatDismiss16Regular = wrapIcon(rawSvg({}), 'ChatDismiss16Regular');
export default ChatDismiss16Regular;
      