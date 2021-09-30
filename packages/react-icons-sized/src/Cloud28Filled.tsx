import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6a6.5 6.5 0 00-6.48 6h-.27a4.75 4.75 0 100 9.5h13.5a4.75 4.75 0 100-9.5h-.27A6.5 6.5 0 0014 6z" fill={primaryFill} /></svg>;
}

const Cloud28Filled = wrapIcon(rawSvg({}), 'Cloud28Filled');
export default Cloud28Filled;
      