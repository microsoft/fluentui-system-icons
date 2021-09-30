import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 7a6 6 0 0111.81-1.5c-.37-.16-.76-.3-1.18-.38A5 5 0 102.7 9.55a.5.5 0 01.05.4l-.5 1.78 1.65-.56a.5.5 0 01.43.06c.25.15.51.3.79.4.08.42.22.81.39 1.18A5.97 5.97 0 014 12.2l-2.34.78a.5.5 0 01-.64-.6l.71-2.5A5.98 5.98 0 011 7zm14 3.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.35 9.35a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 10.7-.7L8.21 10.5l1.14-1.15zm1.86.65l.64-.65a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-.64-.65H13v.5a.5.5 0 001 0V11a1 1 0 00-1-1h-1.8z" fill={primaryFill} /></svg>;
}

const ChatArrowDoubleBack16Regular = wrapIcon(rawSvg({}), 'ChatArrowDoubleBack16Regular');
export default ChatArrowDoubleBack16Regular;
      