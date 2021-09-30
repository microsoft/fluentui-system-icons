import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 44a20 20 0 100-40 20 20 0 000 40zm-3.67-28.7l12.36 6.72a2.25 2.25 0 010 3.96L20.33 32.7A2.25 2.25 0 0117 30.73V17.27c0-1.7 1.83-2.79 3.33-1.97z" fill={primaryFill} /></svg>;
}

const PlayCircle48Filled = wrapIcon(rawSvg({}), 'PlayCircle48Filled');
export default PlayCircle48Filled;
      