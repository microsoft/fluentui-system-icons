import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.73 16.8a.75.75 0 001.04-1.1l-5.24-4.95h12.72a.75.75 0 000-1.5H4.52l5.25-4.96A.75.75 0 008.73 3.2L2.32 9.27a1 1 0 000 1.45l6.41 6.07z" fill={primaryFill} /></svg>;
}

const ArrowLeftFilled = wrapIcon(rawSvg({}), 'ArrowLeftFilled');
export default ArrowLeftFilled;
      