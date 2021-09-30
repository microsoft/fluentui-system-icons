import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 10a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z" fill={primaryFill} /><path d="M11.75 10a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z" fill={primaryFill} /><path d="M15 11.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" fill={primaryFill} /></svg>;
}

const MoreHorizontalFilled = wrapIcon(rawSvg({}), 'MoreHorizontalFilled');
export default MoreHorizontalFilled;
      