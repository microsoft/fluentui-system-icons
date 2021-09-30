import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4.71l2.65 2.64a.5.5 0 10.7-.7L9.9 3.18a.5.5 0 00-.74-.03h-.01l-3.5 3.5a.5.5 0 10.71.7L9 4.71V16.5a.5.5 0 001 0V4.71z" fill={primaryFill} /></svg>;
}

const ArrowSortUpRegular = wrapIcon(rawSvg({}), 'ArrowSortUpRegular');
export default ArrowSortUpRegular;
      