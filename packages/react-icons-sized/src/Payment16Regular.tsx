import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 10a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V5zm13 0a1 1 0 00-1-1H3a1 1 0 00-1 1v1h12V5zM2 11a1 1 0 001 1h10a1 1 0 001-1V7H2v4z" fill={primaryFill} /></svg>;
}

const Payment16Regular = wrapIcon(rawSvg({}), 'Payment16Regular');
export default Payment16Regular;
      