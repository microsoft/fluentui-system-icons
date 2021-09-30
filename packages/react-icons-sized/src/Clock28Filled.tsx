import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 15.5h-5a.75.75 0 01-.75-.75v-7a.75.75 0 011.5 0V14h4.25a.75.75 0 010 1.5zM14 2a12 12 0 100 24 12 12 0 000-24z" fill={primaryFill} /></svg>;
}

const Clock28Filled = wrapIcon(rawSvg({}), 'Clock28Filled');
export default Clock28Filled;
      