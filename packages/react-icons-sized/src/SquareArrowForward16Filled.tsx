import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 4.5c0-1.1.9-2 2-2h7a2 2 0 012 2v1.39a5.5 5.5 0 00-7.61 7.61H4.5a2 2 0 01-2-2v-7zm8 10.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm.9-6.4l.9.9h-1.55A2.75 2.75 0 008 12.25v.25a.5.5 0 001 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 00.71.7l1.76-1.75a.5.5 0 000-.7L12.1 7.9a.5.5 0 00-.7.7z" fill={primaryFill} /></svg>;
}

const SquareArrowForward16Filled = wrapIcon(rawSvg({}), 'SquareArrowForward16Filled');
export default SquareArrowForward16Filled;
      