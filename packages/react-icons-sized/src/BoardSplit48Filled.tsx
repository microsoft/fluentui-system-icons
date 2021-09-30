import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 6A5.25 5.25 0 006 11.25V23h21V6H11.25zM27 25.5H6v11.25C6 39.65 8.35 42 11.25 42H27V25.5zM36.75 42H29.5V31.5H42v5.25c0 2.9-2.35 5.25-5.25 5.25zM42 19.5V29H29.5v-9.5H42zm0-2.5H29.5V6h7.25C39.65 6 42 8.35 42 11.25V17z" fill={primaryFill} /></svg>;
}

const BoardSplit48Filled = wrapIcon(rawSvg({}), 'BoardSplit48Filled');
export default BoardSplit48Filled;
      