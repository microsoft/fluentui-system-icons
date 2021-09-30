import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5a.5.5 0 00-.5.41v9.09a.5.5 0 001 .09V5.5A.5.5 0 006 5zm7.85.15a.5.5 0 00-.63-.06l-.07.06-4.5 4.5a.5.5 0 00-.06.63l.06.07 4.5 4.5a.5.5 0 00.76-.63l-.06-.07L9.71 10l4.14-4.15a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ArrowPreviousRegular = wrapIcon(rawSvg({}), 'ArrowPreviousRegular');
export default ArrowPreviousRegular;
      