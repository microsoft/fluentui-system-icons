import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.05 15.42l6.26-8.48a.7.7 0 011.23.57l-.03.1-3.87 9.8a2.07 2.07 0 11-3.74-1.76l.07-.12.08-.1 6.26-8.49-6.26 8.48zm8.56-8c.75.6 1.44 1.33 2.02 2.17a12.4 12.4 0 011.32 2.4.75.75 0 11-1.4.54c-.1-.25-.22-.53-.37-.81l-2.05 1.18a.75.75 0 01-.84-1.24l.09-.06 2.02-1.16-.23-.32c-.33-.42-.68-.8-1.06-1.16l.38-.96.09-.3.02-.14v-.15zm-2.63-1.57c-.15.09-.29.2-.4.33l-.12.14-.54.73a9.2 9.2 0 00-2.17-.47v2.68a.75.75 0 01-1.5.1V6.56a9.1 9.1 0 00-4.6 1.64 8.32 8.32 0 00-2.11 2.2l2.08 1.2a.75.75 0 01-.66 1.35l-.09-.04-2.07-1.2c-.13.26-.25.54-.36.82a.75.75 0 01-1.4-.54C2.85 9.9 4.12 8.14 5.8 6.97a10.64 10.64 0 0110.18-1.12z" fill={primaryFill} /></svg>;
}

const TopSpeed24Filled = wrapIcon(rawSvg({}), 'TopSpeed24Filled');
export default TopSpeed24Filled;
      