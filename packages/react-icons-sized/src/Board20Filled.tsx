import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 3v4H3V6a3 3 0 013-3h3.5zm1 0v9H17V6a3 3 0 00-3-3h-3.5zM17 13h-6.5v4H14a3 3 0 003-3v-1zm-7.5 4V8H3v6a3 3 0 003 3h3.5z" fill={primaryFill} /></svg>;
}

const Board20Filled = wrapIcon(rawSvg({}), 'Board20Filled');
export default Board20Filled;
      