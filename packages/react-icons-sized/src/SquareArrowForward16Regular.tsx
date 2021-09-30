import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v1.76a5.5 5.5 0 00-1-.66V4.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h1.1c.18.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7zM10.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm.9-6.4l.9.9h-1.55A2.75 2.75 0 008 12.25v.25a.5.5 0 001 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 00.71.7l1.76-1.75a.5.5 0 000-.7L12.1 7.9a.5.5 0 00-.7.7z" fill={primaryFill} /></svg>;
}

const SquareArrowForward16Regular = wrapIcon(rawSvg({}), 'SquareArrowForward16Regular');
export default SquareArrowForward16Regular;
      