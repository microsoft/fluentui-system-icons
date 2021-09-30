import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v1.06L9.5 7V4H6zm4.5 0v8H16V6a2 2 0 00-2-2h-3.5zm5.5 9h-5.5v3H14a2 2 0 002-2v-1zm-6.5 3V8L4 8.06V14c0 1.1.9 2 2 2h3.5z" fill={primaryFill} /></svg>;
}

const Board20Regular = wrapIcon(rawSvg({}), 'Board20Regular');
export default Board20Regular;
      