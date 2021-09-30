import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3A13 13 0 004.35 21.78l-1.7 5.09a2 2 0 002.47 2.55l5.45-1.6A13 13 0 1016 3zm-5 11a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm1 3h6a1 1 0 110 2h-6a1 1 0 110-2z" fill={primaryFill} /></svg>;
}

const Chat32Filled = wrapIcon(rawSvg({}), 'Chat32Filled');
export default Chat32Filled;
      