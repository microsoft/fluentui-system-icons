import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 9.5v11.75A3.75 3.75 0 006.75 25h14.5A3.75 3.75 0 0025 21.25V6.75A3.75 3.75 0 0021.25 3H9.5v6.5H3zm1.5 11.75V18.5h5v5H6.75c-1.24 0-2.25-1-2.25-2.25zM9.5 11v6h-5v-6h5zM11 23.5v-5h6v5h-6zM17 11v6h-6v-6h6zm1.5 12.5v-5h5v2.75c0 1.24-1 2.25-2.25 2.25H18.5zm5-12.5v6h-5v-6h5zm-2.25-6.5c1.24 0 2.25 1 2.25 2.25V9.5h-5v-5h2.75zM11 4.5h6v5h-6v-5z" fill={primaryFill} /></svg>;
}

const PuzzleCube28Regular = wrapIcon(rawSvg({}), 'PuzzleCube28Regular');
export default PuzzleCube28Regular;
      