import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 16a3 3 0 013 3v.71C24 23.3 19.79 26 14 26S4 23.43 4 19.71V19a3 3 0 013-3h14zM14 2a6 6 0 110 12 6 6 0 010-12z" fill={primaryFill} /></svg>;
}

const Person28Filled = wrapIcon(rawSvg({}), 'Person28Filled');
export default Person28Filled;
      