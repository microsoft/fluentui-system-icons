import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 14a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zm5-15A13 13 0 004.35 21.78l-1.7 5.09a2 2 0 002.47 2.55l5.45-1.6A13 13 0 1016 3zM5 16a11 11 0 116.1 9.85l-.35-.18-6.2 1.83 1.97-5.9-.2-.38A10.94 10.94 0 015 16z" fill={primaryFill} /></svg>;
}

const Chat32Regular = wrapIcon(rawSvg({}), 'Chat32Regular');
export default Chat32Regular;
      