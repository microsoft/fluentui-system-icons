import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5a1 1 0 000 2h18a1 1 0 100-2H3z" fill={primaryFill} /><path d="M10 17a1 1 0 100 2h11a1 1 0 100-2H10z" fill={primaryFill} /><path d="M9 12a1 1 0 011-1h11a1 1 0 110 2H10a1 1 0 01-1-1z" fill={primaryFill} /><path d="M4.7 13.3a1 1 0 00-1.4 1.4L4.58 16l-1.3 1.3a1 1 0 101.42 1.4l2-2a1 1 0 000-1.4l-2-2z" fill={primaryFill} /></svg>;
}

const TextHanging24Filled = wrapIcon(rawSvg({}), 'TextHanging24Filled');
export default TextHanging24Filled;
      