import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.78 6.78a.75.75 0 00-.53-1.28H18.5V2.75a.75.75 0 00-1.28-.53l-2.5 2.5a.75.75 0 00-.22.53v2.84l-1.98 1.98A2 2 0 0010 12a2 2 0 103.93-.52l1.98-1.98h2.84c.2 0 .39-.08.53-.22l2.5-2.5zM12 2c1.2 0 2.36.21 3.42.6l-1.4 1.41-.18.2A8.02 8.02 0 004 12a8 8 0 1015.79-1.84l.2-.17 1.4-1.41A10 10 0 1112 2zm0 4c.52 0 1.02.07 1.5.19v1.48l-.41.42-.05.05a4 4 0 102.82 2.82l.05-.05.42-.41h1.48A6.01 6.01 0 1112 6z" fill={primaryFill} /></svg>;
}

const TargetArrow24Filled = wrapIcon(rawSvg({}), 'TargetArrow24Filled');
export default TargetArrow24Filled;
      