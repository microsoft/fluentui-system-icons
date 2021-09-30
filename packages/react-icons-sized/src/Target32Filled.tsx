import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 13.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0-5a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM11.25 16a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zM6.25 16a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z" fill={primaryFill} /></svg>;
}

const Target32Filled = wrapIcon(rawSvg({}), 'Target32Filled');
export default Target32Filled;
      