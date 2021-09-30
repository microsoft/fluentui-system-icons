import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 24a10 10 0 0110-10h20a10 10 0 010 20H14A10 10 0 014 24zm5.5 0a5 5 0 1010 0 5 5 0 00-10 0z" fill={primaryFill} /></svg>;
}

const ToggleLeft48Filled = wrapIcon(rawSvg({}), 'ToggleLeft48Filled');
export default ToggleLeft48Filled;
      