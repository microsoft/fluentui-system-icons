import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 3.12a1 1 0 00-1 0L3.47 6.64a1 1 0 000 1.72l6.02 3.5a1 1 0 001 0l6.01-3.5a1 1 0 000-1.72l-6-3.52zm-1 1.16a1 1 0 011 0L16 7.5l-5.5 3.2a1 1 0 01-1 0L3.99 7.5l5.5-3.22z" fill={primaryFill} /><path d="M3.07 9.65l6.44 3.62a1 1 0 00.98 0l6.44-3.62a1 1 0 01-.42 1.26l-6 3.5a1 1 0 01-1.01 0l-6.01-3.5a1 1 0 01-.42-1.26z" fill={primaryFill} /><path d="M3.07 12.1l6.44 3.63a1 1 0 00.98 0l6.44-3.63a1 1 0 01-.42 1.26l-6 3.5a1 1 0 01-1.01 0l-6.01-3.5a1 1 0 01-.42-1.26z" fill={primaryFill} /></svg>;
}

const LayerRegular = wrapIcon(rawSvg({}), 'LayerRegular');
export default LayerRegular;
      