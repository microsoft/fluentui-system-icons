import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v8.5A2.75 2.75 0 005.75 17H9.6a5.46 5.46 0 01-.5-1.5H5.74c-.69 0-1.25-.56-1.25-1.25V7h11v2.1c.53.09 1.04.26 1.5.5V5.75A2.75 2.75 0 0014.25 3h-8.5zm8.75 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-4.85a.5.5 0 11-.7.7L15 13.71v2.79a.5.5 0 01-1 0v-2.8l-1.15 1.15a.5.5 0 11-.7-.7l2-2a.5.5 0 01.35-.15.5.5 0 01.35.14l2 2z" fill={primaryFill} /></svg>;
}

const WindowArrowUp20Filled = wrapIcon(rawSvg({}), 'WindowArrowUp20Filled');
export default WindowArrowUp20Filled;
      