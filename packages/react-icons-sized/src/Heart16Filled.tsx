import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.54 3.95a3.25 3.25 0 00-4.6-.01 3.25 3.25 0 00.02 4.6l4.7 4.7c.2.2.52.2.71 0l4.69-4.68a3.25 3.25 0 00-4.61-4.6l-.46.44-.45-.45z" fill={primaryFill} /></svg>;
}

const Heart16Filled = wrapIcon(rawSvg({}), 'Heart16Filled');
export default Heart16Filled;
      