import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h5v-5h-5v5zm6.5 0h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5zm5-6.5v-5h-5v5h5zM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5zm-6.5-5h-5v5h5V3zM3 9.5v5h5v-5H3zM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3zm11.5-6.5v5h-5v-5h5z" fill={primaryFill} /></svg>;
}

const PuzzleCube24Filled = wrapIcon(rawSvg({}), 'PuzzleCube24Filled');
export default PuzzleCube24Filled;
      