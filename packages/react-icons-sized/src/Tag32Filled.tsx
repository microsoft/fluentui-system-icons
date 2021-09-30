import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.95 4.08A4 4 0 0118.68 3h6.82A3.5 3.5 0 0129 6.5v6.76a4 4 0 01-1.17 2.83L16 27.9a4.25 4.25 0 01-6.02 0l-6.32-6.33a4.25 4.25 0 01.1-6.1l12.18-11.4zM22.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /></svg>;
}

const Tag32Filled = wrapIcon(rawSvg({}), 'Tag32Filled');
export default Tag32Filled;
      