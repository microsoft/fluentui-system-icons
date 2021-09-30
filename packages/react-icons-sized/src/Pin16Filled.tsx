import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.06 2.45a1.5 1.5 0 00-2.39.35L5.65 6.59l-2.8.94a.5.5 0 00-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 00.82-.2l.94-2.8 3.78-2.03a1.5 1.5 0 00.35-2.38l-3.48-3.5z" fill={primaryFill} /></svg>;
}

const Pin16Filled = wrapIcon(rawSvg({}), 'Pin16Filled');
export default Pin16Filled;
      