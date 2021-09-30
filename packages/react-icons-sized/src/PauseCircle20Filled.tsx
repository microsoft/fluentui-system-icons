import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm7-2.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm3 0a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /></svg>;
}

const PauseCircle20Filled = wrapIcon(rawSvg({}), 'PauseCircle20Filled');
export default PauseCircle20Filled;
      