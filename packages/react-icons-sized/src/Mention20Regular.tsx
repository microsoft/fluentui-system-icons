import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 018 8c0 2.7-1.14 4.5-3 4.5-1.23 0-2.14-.78-2.62-2.09-.6.98-1.6 1.59-2.88 1.59C7.36 14 6 12.3 6 10c0-2.34 1.31-4 3.5-4 1.05 0 1.9.38 2.5 1.04V6.5a.5.5 0 011-.09V10c0 2.22.81 3.5 2 3.5s2-1.28 2-3.5a7 7 0 10-4.62 6.58.5.5 0 01.34.94A7.99 7.99 0 012 10a8 8 0 018-8zm-.5 5C7.92 7 7 8.17 7 10c0 1.8.97 3 2.5 3s2.5-1.2 2.5-3c0-1.83-.92-3-2.5-3z" fill={primaryFill} /></svg>;
}

const Mention20Regular = wrapIcon(rawSvg({}), 'Mention20Regular');
export default Mention20Regular;
      