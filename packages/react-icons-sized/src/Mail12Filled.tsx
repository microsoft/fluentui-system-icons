import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25V7.5C2 8.33 2.67 9 3.5 9h5c.83 0 1.5-.67 1.5-1.5V5.25l-3.8 1.7a.5.5 0 01-.4 0L2 5.26zm.04-1.08L6 5.95l3.96-1.78A1.5 1.5 0 008.5 3h-5c-.71 0-1.31.5-1.46 1.17z" fill={primaryFill} /></svg>;
}

const Mail12Filled = wrapIcon(rawSvg({}), 'Mail12Filled');
export default Mail12Filled;
      