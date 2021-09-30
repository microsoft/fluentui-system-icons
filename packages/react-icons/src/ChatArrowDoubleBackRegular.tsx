import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 018 8.25 5.5 5.5 0 00-1.01-.66 7 7 0 10-13.1 3.83.5.5 0 01.07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 01.19-.01l.09.02.09.04c.92.51 1.94.82 3.01.88.19.36.4.7.66 1a7.93 7.93 0 01-3.86-.85l-.12-.07-3.65.92a.5.5 0 01-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 01-.83-2.9l-.02-.37L2 10a8 8 0 018-8zm9 12.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.65-1.15a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15zm1.86.65l.64-.65a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-.64-.65H17v.5a.5.5 0 001 0V15a1 1 0 00-1-1h-1.8z" fill={primaryFill} /></svg>;
}

const ChatArrowDoubleBackRegular = wrapIcon(rawSvg({}), 'ChatArrowDoubleBackRegular');
export default ChatArrowDoubleBackRegular;
      