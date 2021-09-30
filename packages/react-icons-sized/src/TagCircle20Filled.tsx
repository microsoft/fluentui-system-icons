import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm4-1.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 000-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5C6.67 7 6 7.67 6 8.5z" fill={primaryFill} /></svg>;
}

const TagCircle20Filled = wrapIcon(rawSvg({}), 'TagCircle20Filled');
export default TagCircle20Filled;
      