import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 100 24 12 12 0 000-24zm-1.23 7.28l6.5 3.86a1 1 0 010 1.72l-6.5 3.86a1.5 1.5 0 01-2.27-1.29v-6.86a1.5 1.5 0 012.27-1.3z" fill={primaryFill} /></svg>;
}

const PlayCircle28Filled = wrapIcon(rawSvg({}), 'PlayCircle28Filled');
export default PlayCircle28Filled;
      