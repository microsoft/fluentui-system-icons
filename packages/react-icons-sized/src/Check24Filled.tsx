import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.77 5.79a.75.75 0 10-1.04-1.08l-6.75 6.5a.75.75 0 101.04 1.08l6.75-6.5zM18.99 5H4.55A2.55 2.55 0 002 7.55v6.9C2 15.85 3.14 17 4.55 17h14.9c1.4 0 2.55-1.14 2.55-2.55v-6.9c0-.18-.02-.36-.06-.54l-6.23 6a1.75 1.75 0 01-2.42-2.52L18.99 5zM4.5 9.25c0-.41.34-.75.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zm0 3.5c0-.41.34-.75.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Check24Filled = wrapIcon(rawSvg({}), 'Check24Filled');
export default Check24Filled;
      