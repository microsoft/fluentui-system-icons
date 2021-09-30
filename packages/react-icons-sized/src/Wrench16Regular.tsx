import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a4 4 0 015.45-3.73.5.5 0 01.17.82L10.7 4 12 5.3l1.91-1.92a.5.5 0 01.82.17 4 4 0 01-4.83 5.3l-5 5.07a1.99 1.99 0 01-2.85-2.77L7.1 5.9c-.06-.3-.1-.6-.1-.91zm4-3a3 3 0 00-2.86 3.9.5.5 0 01-.12.5l-5.25 5.44a.99.99 0 001.41 1.38l5.23-5.3a.5.5 0 01.53-.11 3 3 0 004.05-3.09l-1.64 1.63a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7L11.28 2 11 2z" fill={primaryFill} /></svg>;
}

const Wrench16Regular = wrapIcon(rawSvg({}), 'Wrench16Regular');
export default Wrench16Regular;
      