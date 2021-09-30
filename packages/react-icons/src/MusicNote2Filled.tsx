import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.99 3.02a1 1 0 00-1.29-.8l-7 2.2a1 1 0 00-.7.95v8.13a2.5 2.5 0 101 2V8.37l7-2.19v5.32a2.5 2.5 0 101 2V3.18l-.01-.16z" fill={primaryFill} /></svg>;
}

const MusicNote2Filled = wrapIcon(rawSvg({}), 'MusicNote2Filled');
export default MusicNote2Filled;
      