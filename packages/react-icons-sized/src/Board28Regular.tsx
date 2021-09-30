import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3A3.75 3.75 0 003 6.75v14.5A3.75 3.75 0 006.75 25h14.5A3.75 3.75 0 0025 21.25V6.75A3.75 3.75 0 0021.25 3H6.75zM4.5 6.75c0-1.24 1-2.25 2.25-2.25h6.75v5h-9V6.75zm0 4.25h9v12.5H6.75c-1.24 0-2.25-1-2.25-2.25V11zM15 23.5V18h8.5v3.25c0 1.24-1 2.25-2.25 2.25H15zm8.5-7H15v-12h6.25c1.24 0 2.25 1 2.25 2.25v9.75z" fill={primaryFill} /></svg>;
}

const Board28Regular = wrapIcon(rawSvg({}), 'Board28Regular');
export default Board28Regular;
      