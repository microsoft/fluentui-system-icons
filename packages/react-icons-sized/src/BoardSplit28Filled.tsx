import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3A3.75 3.75 0 003 6.75V13h13V3H6.75zM16 14.5H3v6.75A3.75 3.75 0 006.75 25H16V14.5zM21.25 25H17.5v-7H25v3.25A3.75 3.75 0 0121.25 25zM25 16.5h-7.5v-5H25v5zM17.5 3v7H25V6.75A3.75 3.75 0 0021.25 3H17.5z" fill={primaryFill} /></svg>;
}

const BoardSplit28Filled = wrapIcon(rawSvg({}), 'BoardSplit28Filled');
export default BoardSplit28Filled;
      