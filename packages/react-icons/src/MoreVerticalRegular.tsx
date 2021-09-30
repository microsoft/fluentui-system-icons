import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 6z" fill={primaryFill} /><path d="M10 11.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill={primaryFill} /><path d="M8.75 15.25a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z" fill={primaryFill} /></svg>;
}

const MoreVerticalRegular = wrapIcon(rawSvg({}), 'MoreVerticalRegular');
export default MoreVerticalRegular;
      