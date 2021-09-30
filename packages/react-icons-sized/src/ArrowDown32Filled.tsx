import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3c.69 0 1.25.56 1.25 1.25v20.54l7.63-7.44a1.25 1.25 0 111.74 1.8l-9.74 9.5a1.25 1.25 0 01-.39.25h-.02a1.25 1.25 0 01-1.35-.26l-9.74-9.5a1.25 1.25 0 011.74-1.79l7.63 7.44V4.25c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
}

const ArrowDown32Filled = wrapIcon(rawSvg({}), 'ArrowDown32Filled');
export default ArrowDown32Filled;
      