import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 10.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-.26-5.84A.5.5 0 007.5 5v3.59a.5.5 0 001-.09V4.91zM8 2a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L5 13.2A6 6 0 108 2zM3 8a5 5 0 112.33 4.23.5.5 0 00-.43-.06l-1.66.56.51-1.79a.5.5 0 00-.05-.39A4.97 4.97 0 013 8z" fill={primaryFill} /></svg>;
}

const ChatWarning16Regular = wrapIcon(rawSvg({}), 'ChatWarning16Regular');
export default ChatWarning16Regular;
      