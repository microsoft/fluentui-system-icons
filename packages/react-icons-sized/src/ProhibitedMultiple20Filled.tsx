import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2a7 7 0 110 14A7 7 0 019 2zm3.32 2.62a5.5 5.5 0 00-7.7 7.7l7.7-7.7zm1.06 1.06l-7.7 7.7a5.5 5.5 0 007.7-7.7zM9 17a8 8 0 007.75-10 7 7 0 01-9.74 9.74c.63.17 1.3.26 1.99.26z" fill={primaryFill} /></svg>;
}

const ProhibitedMultiple20Filled = wrapIcon(rawSvg({}), 'ProhibitedMultiple20Filled');
export default ProhibitedMultiple20Filled;
      