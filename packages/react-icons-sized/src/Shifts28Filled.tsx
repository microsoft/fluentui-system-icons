import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25zm11.5 1.5a.75.75 0 00-1.5 0v7c0 .41.34.75.75.75h5.5a.75.75 0 000-1.5H14.5V7.75z" fill={primaryFill} /></svg>;
}

const Shifts28Filled = wrapIcon(rawSvg({}), 'Shifts28Filled');
export default Shifts28Filled;
      