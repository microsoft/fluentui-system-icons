import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8a6 6 0 113 5.2l-2.34.77a.5.5 0 01-.64-.6l.71-2.5A5.98 5.98 0 012 8zm3.9-2.1l-.06.07a.5.5 0 00.06.63L7.3 8 5.9 9.4l-.06.07a.5.5 0 00.06.63l.07.06c.2.14.46.12.63-.06L8 8.7l1.4 1.4.07.06c.2.14.46.12.63-.06l.06-.07a.5.5 0 00-.06-.63L8.7 8l1.4-1.4.06-.07a.5.5 0 00-.06-.63l-.07-.06a.5.5 0 00-.63.06L8 7.3 6.6 5.9l-.07-.06a.5.5 0 00-.63.06z" fill={primaryFill} /></svg>;
}

const ChatDismiss16Filled = wrapIcon(rawSvg({}), 'ChatDismiss16Filled');
export default ChatDismiss16Filled;
      