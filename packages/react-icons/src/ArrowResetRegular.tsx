import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 2.65c.2.2.2.5 0 .7L4.21 5H11a6 6 0 11-6 6 .5.5 0 011 0 5 5 0 105-5H4.2l1.65 1.65a.5.5 0 11-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ArrowResetRegular = wrapIcon(rawSvg({}), 'ArrowResetRegular');
export default ArrowResetRegular;
      