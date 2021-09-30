import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5c.41 0 .75.34.75.75v6.25a.75.75 0 01-1.5 0V7.25c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M12 17.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M12 2a10 10 0 11-4.59 18.89L3.6 21.96a1.25 1.25 0 01-1.54-1.54l1.06-3.83A10 10 0 0112 2zm0 1.5a8.5 8.5 0 00-7.43 12.64l.15.27-1.1 3.98 3.98-1.11.27.15A8.5 8.5 0 1012 3.5z" fill={primaryFill} /></svg>;
}

const ChatWarning24Regular = wrapIcon(rawSvg({}), 'ChatWarning24Regular');
export default ChatWarning24Regular;
      