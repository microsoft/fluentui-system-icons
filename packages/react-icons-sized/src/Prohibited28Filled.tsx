import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm7.54 6.22L8.22 21.54A9.5 9.5 0 0021.54 8.22zM14 4.5a9.5 9.5 0 00-7.54 15.28L19.78 6.46A9.46 9.46 0 0014 4.5z" fill={primaryFill} /></svg>;
}

const Prohibited28Filled = wrapIcon(rawSvg({}), 'Prohibited28Filled');
export default Prohibited28Filled;
      