import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 1a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L4 12.2c.46.28.97.49 1.5.62a5.5 5.5 0 017.3-7.3A6 6 0 007.01 1zm8 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.35 9.35a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 10.7-.7L8.21 10.5l1.14-1.15zm1.86.65l.64-.65a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-.64-.65H13v.5a.5.5 0 001 0V11a1 1 0 00-1-1h-1.8z" fill={primaryFill} /></svg>;
}

const ChatArrowDoubleBack16Filled = wrapIcon(rawSvg({}), 'ChatArrowDoubleBack16Filled');
export default ChatArrowDoubleBack16Filled;
      