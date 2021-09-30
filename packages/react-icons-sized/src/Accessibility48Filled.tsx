import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.75 15.5a5.75 5.75 0 100-11.5 5.75 5.75 0 000 11.5zm0 2.5c3.68 0 6.8-2.41 7.86-5.74l4.38-1.53a3.88 3.88 0 012.63 7.3L31 20.87v7.4l4.08 10.5a3.76 3.76 0 11-7 2.71L24.9 33.3a.97.97 0 00-1.8 0l-3.17 8.18a3.76 3.76 0 11-7.01-2.72L17 28.26v-7.41l-8.04-3.22a3.76 3.76 0 012.64-7.04l4.23 1.48A8.25 8.25 0 0023.75 18z" fill={primaryFill} /></svg>;
}

const Accessibility48Filled = wrapIcon(rawSvg({}), 'Accessibility48Filled');
export default Accessibility48Filled;
      