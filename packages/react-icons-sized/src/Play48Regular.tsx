import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 8.41l24.42 12.7a3.25 3.25 0 010 5.77l-24.42 12.7A3.25 3.25 0 0112 36.7V11.3a3.25 3.25 0 014.55-2.98l.2.1zm-1.15 2.22l-.11-.05a.75.75 0 00-.99.72v25.4a.75.75 0 001.1.67L40 24.67a.75.75 0 000-1.34L15.6 10.63z" fill={primaryFill} /></svg>;
}

const Play48Regular = wrapIcon(rawSvg({}), 'Play48Regular');
export default Play48Regular;
      