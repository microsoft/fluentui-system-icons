import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 018 8.25A5.5 5.5 0 0010.26 18a7.93 7.93 0 01-3.87-.85l-.12-.07-3.65.92a.5.5 0 01-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 01-.83-2.9l-.02-.37L2 10a8 8 0 018-8zm9 12.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.65-1.15a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15zm1.86.65l.64-.65a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-.64-.65H17v.5a.5.5 0 001 0V15a1 1 0 00-1-1h-1.8z" fill={primaryFill} /></svg>;
}

const ChatArrowDoubleBack20Filled = wrapIcon(rawSvg({}), 'ChatArrowDoubleBack20Filled');
export default ChatArrowDoubleBack20Filled;
      