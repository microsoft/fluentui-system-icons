import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 7C19.55 7 21 8.46 21 10.25v27.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 019 37.75v-27.5C9 8.45 10.46 7 12.25 7h5.5zm18 0C37.55 7 39 8.46 39 10.25v27.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 0127 37.75v-27.5C27 8.45 28.46 7 30.25 7h5.5z" fill={primaryFill} /></svg>;
}

const Pause48Filled = wrapIcon(rawSvg({}), 'Pause48Filled');
export default Pause48Filled;
      