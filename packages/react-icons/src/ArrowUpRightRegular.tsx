import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4a.5.5 0 110-1h8c.28 0 .5.22.5.5v8a.5.5 0 01-1 0V4.7L3.85 16.86a.5.5 0 01-.7-.7L15.29 4H8.5z" fill={primaryFill} /></svg>;
}

const ArrowUpRightRegular = wrapIcon(rawSvg({}), 'ArrowUpRightRegular');
export default ArrowUpRightRegular;
      