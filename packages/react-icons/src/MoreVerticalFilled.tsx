import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5A1.75 1.75 0 1110 3a1.75 1.75 0 010 3.5z" fill={primaryFill} /><path d="M10 17a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" fill={primaryFill} /><path d="M8.25 10a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0z" fill={primaryFill} /></svg>;
}

const MoreVerticalFilled = wrapIcon(rawSvg({}), 'MoreVerticalFilled');
export default MoreVerticalFilled;
      