import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 11.62 3.33 3.33 0 0114.72 15H5.28A3.33 3.33 0 012 11.62a3.33 3.33 0 013.28-3.37h.07C5.6 5.9 7.18 4 10 4z" fill={primaryFill} /></svg>;
}

const Cloud20Filled = wrapIcon(rawSvg({}), 'Cloud20Filled');
export default Cloud20Filled;
      