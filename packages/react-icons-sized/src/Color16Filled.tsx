import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8a6 6 0 1112 0c0 1.58-.33 3.05-.98 4.15C12.35 13.25 11.33 14 10 14a3 3 0 01-3-3v-1a1 1 0 00-1-1c-.28 0-.4.1-.65.35l-.01.02c-.25.25-.63.63-1.34.63a2 2 0 01-2-2zm5.5-2.5a.5.5 0 100-1 .5.5 0 000 1zm2.5 0a.5.5 0 10-1 0 .5.5 0 001 0zM11.5 7a.5.5 0 10-1 0 .5.5 0 001 0zM11 9.5a.5.5 0 100-1 .5.5 0 000 1zm-.5 1.5a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const Color16Filled = wrapIcon(rawSvg({}), 'Color16Filled');
export default Color16Filled;
      