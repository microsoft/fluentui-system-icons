import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 2a7.5 7.5 0 017.18 5.32 7.5 7.5 0 11-9.36 9.36A7.5 7.5 0 019.5 2zM17 9.6v-.1A7.5 7.5 0 019.6 17 5.5 5.5 0 1017 9.6zM9.5 4A5.5 5.5 0 007 14.4v.1A7.5 7.5 0 0114.4 7a5.5 5.5 0 00-4.9-3z" fill={primaryFill} /></svg>;
}

const PhotoFilter24Filled = wrapIcon(rawSvg({}), 'PhotoFilter24Filled');
export default PhotoFilter24Filled;
      