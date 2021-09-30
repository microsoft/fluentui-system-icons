import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.21 4.39l.08-.1a1 1 0 011.32-.08l.1.08L12 10.6l6.3-6.3a1 1 0 111.4 1.42L13.42 12l6.3 6.3a1 1 0 01.08 1.31l-.08.1a1 1 0 01-1.32.08l-.1-.08L12 13.4l-6.3 6.3a1 1 0 01-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 01-.08-1.31l.08-.1-.08.1z" fill={primaryFill} /></svg>;
}

const Dismiss24Filled = wrapIcon(rawSvg({}), 'Dismiss24Filled');
export default Dismiss24Filled;
      