import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.34 16.72a.76.76 0 01-.59.28.73.73 0 01-.53-.22l-3-3a.75.75 0 011.06-1.07L9 14.44V3.75a.75.75 0 011.5 0v10.68l1.72-1.71a.75.75 0 111.06 1.06l-2.94 2.94z" fill={primaryFill} /></svg>;
}

const ArrowSortDownFilled = wrapIcon(rawSvg({}), 'ArrowSortDownFilled');
export default ArrowSortDownFilled;
      