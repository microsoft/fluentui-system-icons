import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6a5 5 0 1110 0A5 5 0 011 6zm3-.5a.5.5 0 000 1h4a.5.5 0 000-1H4z" fill={primaryFill} /></svg>;
}

const SubtractCircle12Filled = wrapIcon(rawSvg({}), 'SubtractCircle12Filled');
export default SubtractCircle12Filled;
      