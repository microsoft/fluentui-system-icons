import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 2.75a.75.75 0 00-.97-.72l-10 3a.75.75 0 00-.53.72v9.88a3.5 3.5 0 101.5 2.62v-7.94l8.5-2.55v5.87a3.5 3.5 0 101.5 2.62V2.75z" fill={primaryFill} /></svg>;
}

const MusicNote224Filled = wrapIcon(rawSvg({}), 'MusicNote224Filled');
export default MusicNote224Filled;
      