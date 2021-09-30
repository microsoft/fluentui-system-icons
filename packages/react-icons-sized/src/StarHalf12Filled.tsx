import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9.43L3.78 10.6a.8.8 0 01-1.16-.85l.42-2.47-1.8-1.76a.8.8 0 01.45-1.36l2.48-.36 1.11-2.25A.8.8 0 016 1.1a.8.8 0 01.72.45L7.83 3.8l2.49.36c.65.1.91.9.44 1.36l-1.8 1.76.43 2.47a.8.8 0 01-1.17.85L6 9.43zm0-7.08V8.4a.8.8 0 01.37.1l1.96 1.02-.37-2.18a.8.8 0 01.23-.7l1.58-1.55-2.19-.32a.8.8 0 01-.6-.43L6 2.35z" fill={primaryFill} /></svg>;
}

const StarHalf12Filled = wrapIcon(rawSvg({}), 'StarHalf12Filled');
export default StarHalf12Filled;
      