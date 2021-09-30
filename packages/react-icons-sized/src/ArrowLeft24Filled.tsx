import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.3 19.72a1 1 0 001.4-1.43L6.33 13H20a1 1 0 100-2H6.34l5.36-5.28a1 1 0 00-1.4-1.43l-6.93 6.82c-.5.5-.5 1.3 0 1.78l6.93 6.83z" fill={primaryFill} /></svg>;
}

const ArrowLeft24Filled = wrapIcon(rawSvg({}), 'ArrowLeft24Filled');
export default ArrowLeft24Filled;
      