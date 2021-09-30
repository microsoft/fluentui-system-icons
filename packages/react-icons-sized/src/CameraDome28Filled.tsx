import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75C2 3.78 2.78 3 3.75 3h20.5a1.75 1.75 0 110 3.5H3.75C2.78 6.5 2 5.72 2 4.75zM9 16.5a5 5 0 1110 0 5 5 0 01-10 0zm5 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM3 8h22v7a11 11 0 01-22 0V8zm4.5 8.5a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0z" fill={primaryFill} /></svg>;
}

const CameraDome28Filled = wrapIcon(rawSvg({}), 'CameraDome28Filled');
export default CameraDome28Filled;
      