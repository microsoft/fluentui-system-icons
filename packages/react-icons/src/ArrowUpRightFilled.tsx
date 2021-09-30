import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3.75c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v7.5a.75.75 0 11-1.5 0V5.56L4.28 16.78a.75.75 0 01-1.06-1.06L14.44 4.5h-5.7A.75.75 0 018 3.75z" fill={primaryFill} /></svg>;
}

const ArrowUpRightFilled = wrapIcon(rawSvg({}), 'ArrowUpRightFilled');
export default ArrowUpRightFilled;
      