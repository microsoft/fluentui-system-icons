import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.75A4.75 4.75 0 018.75 8h30.5A4.75 4.75 0 0144 12.75v18.5A4.75 4.75 0 0139.25 36H8.75A4.75 4.75 0 014 31.25v-18.5z" fill={primaryFill} /><path d="M11.25 39.5a1.25 1.25 0 100 2.5h25.5a1.25 1.25 0 100-2.5h-25.5z" fill={primaryFill} /></svg>;
}

const Tv48Filled = wrapIcon(rawSvg({}), 'Tv48Filled');
export default Tv48Filled;
      