import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.15 3.24a4 4 0 00-6.4 1.04l-3.18 6.35a1.5 1.5 0 01-.87.75l-4.98 1.66a2 2 0 00-.78 3.31l4.15 4.15L4 26.59V28h1.41l6.09-6.09 4.15 4.15a2 2 0 003.31-.78l1.66-4.98c.13-.38.4-.7.75-.87l6.35-3.17a4 4 0 001.04-6.41l-6.61-6.61zm-4.62 1.93a2 2 0 013.2-.52l6.62 6.61a2 2 0 01-.52 3.2l-6.35 3.18a3.5 3.5 0 00-1.76 2.03l-1.66 4.98-9.7-9.71 4.97-1.66a3.5 3.5 0 002.03-1.76l3.17-6.35z" fill={primaryFill} /></svg>;
}

const Pin32Regular = wrapIcon(rawSvg({}), 'Pin32Regular');
export default Pin32Regular;
      