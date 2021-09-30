import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 1c.28 0 .5.22.5.5v1a.5.5 0 11-1 0v-1c0-.28.22-.5.5-.5zm2.65.15a.5.5 0 11.7.7l-1 1a.5.5 0 11-.7-.7l1-1zm-7.71.7a1.5 1.5 0 012.12 0l5.59 5.59a1.5 1.5 0 010 2.12l-.94.94L5.5 2.8l.94-.95zM5 3.71v3.58l-3.65 3.65a1.5 1.5 0 000 2.12l1.59 1.59a1.5 1.5 0 002.12 0L8.71 11h3.58L5 3.7zm1.85 6.14l-1 1a.5.5 0 01-.7-.7l1-1a.5.5 0 11.7.7zM14.5 5h-1a.5.5 0 010-1h1a.5.5 0 110 1z" fill={primaryFill} /></svg>;
}

const Flashlight16Filled = wrapIcon(rawSvg({}), 'Flashlight16Filled');
export default Flashlight16Filled;
      